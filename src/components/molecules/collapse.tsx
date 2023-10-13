import {useEffect,useState} from 'react'
import { HiCheck, HiChevronDown, HiChevronUp, HiOutlineClock, HiOutlineExclamationCircle, HiOutlineLockClosed, HiOutlineLockOpen, HiXMark } from "react-icons/hi2"
import { useDispatch, useSelector } from "react-redux";
import { setActiveCollapse } from "../../store/collapseSlice";
import { AppDispatch, RootState } from "../../store";
import { CategoryType, CurriculumType } from "@/src/store/types/ClassTypes";
import { classActions, classActiveCurriculum, classCategoryById, classCurriculumByCategoryId, classCurriculumById, classTaskByCurriculumId } from "@/src/store/classSlice";
import Skeleton from "./skeleton";
import { StatusType, useGetCurriculumStatus } from "@/src/store/hooks/class-hooks";
import { getRegistrantTaskAll, selectRegistrantProgressByCurriculumId, selectRegistrantTaskAllByCurriculumId, selectRegistrantTaskFinishedByCurriculumId, selectRegistrantTaskResolvedByCurriculumId, selectRegistrantTaskUnresolvedByCurriculumId } from '@/src/store/registrantSlice';


interface CollapseChildProps {
    status: StatusType
    curriculumData: CurriculumType
}
interface CollapseProps {
    categoryData: CategoryType
}

function CollapseChild({ status, curriculumData }: CollapseChildProps) {
    const activeCurriculum = useSelector(classActiveCurriculum)
    const dispatch: AppDispatch = useDispatch()
    return (
        <div onClick={() => {
            if (status != 'locked') {
              dispatch(classActions.setActiveCurriculum(curriculumData.id))
              window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
              });
            }
        }} className={`flex flex-row items-center gap-3 px-3 py-2 border bg-white ${status == 'locked' ? '!bg-neutral-20 !cursor-not-allowed' : ''} ${activeCurriculum == curriculumData.id ? '!bg-blue-100':''} cursor-pointer hover:bg-blue-100`} >
            {
              status == 'finished' ? <div className="text-[#0C8048]"><HiCheck /></div>: 
                (status == 'waiting' ? <div className="text-white rounded-lg bg-yellow-600 p-0.5"><HiOutlineClock /></div> : 
                  (status == 'unfinished' ? <div className="text-white rounded-lg bg-danger-main p-0.5"><HiXMark /></div> : 
                    (status == 'unlocked' ? <div className="rounded-lg p-0.5"><HiOutlineLockOpen /></div> : 
                      (status == 'ongoing' ? <div className="rounded-lg p-0.5"><HiOutlineLockOpen /></div> : 
                        (status == 'locked' ? <div className="text-[#A4A4A4]"><HiOutlineLockClosed /></div> : <div className="text-[#0C8048]"><Skeleton className="h-4 w-4 rounded-lg" /></div>)))))
            }
            <h4 className={status == 'locked' ? 'text-[#A9A9A9]' : 'text-text-heading'}>{curriculumData.title}</h4>
        </div>
    )
}

function CollapseItem({curriculum, onStatusChanged}: {curriculum: CurriculumType, onStatusChanged: Function}) {
  const activeCurriculumId = useSelector(classActiveCurriculum)
  const activeCurriculum = useSelector((state: RootState) => classCurriculumById(state,activeCurriculumId as unknown as number))
  const activeCurriculumCategory = useSelector((state: RootState) => classCategoryById(state,activeCurriculum?.curriculum_category_id as unknown as number))
  const activeCurriculumCategoryId = activeCurriculumCategory?.id

  
  const currentCurriculumCategory = useSelector((state: RootState) => classCategoryById(state, curriculum?.curriculum_category_id as unknown as number))
  
  const currentProgress = useSelector((state: RootState) => selectRegistrantProgressByCurriculumId(state, curriculum.id))
  
  const currentClassTaskAll = useSelector((state: RootState) => classTaskByCurriculumId(state,curriculum.id))
  const currentTaskAll = useSelector((state: RootState) => selectRegistrantTaskAllByCurriculumId(state,curriculum.id))
  const currentTaskUnresolved = useSelector((state: RootState) => selectRegistrantTaskUnresolvedByCurriculumId(state, curriculum.id))
  const currentTaskResolved = useSelector((state: RootState) => selectRegistrantTaskResolvedByCurriculumId(state, curriculum.id))
  const currentTaskFinished = useSelector((state: RootState) => selectRegistrantTaskFinishedByCurriculumId(state, curriculum.id))

  const studentTaskAll = useSelector(getRegistrantTaskAll)

  const [currentStatus, setCurrentStatus] = useState<StatusType>(null)
  
  useEffect(() => {
    const currentLocked = ((currentCurriculumCategory?.sort ?? 0) == (activeCurriculumCategory?.sort ?? 0) && ((curriculum.sort as unknown as number) > (activeCurriculum?.sort as unknown as number))) || (currentCurriculumCategory?.sort as unknown as number) > (activeCurriculumCategory?.sort as unknown as number)
    let currentStatusLocal: StatusType = null
    if (activeCurriculumId && activeCurriculumCategoryId) {
      // is locked
      if (currentLocked) {
        currentStatusLocal = 'locked'
      } else {
        // is unlocked
        // unlock but not opened
        if (!currentProgress) {
          currentStatusLocal = 'unlocked'
        }
        // finished 
        else if (currentProgress.status == 'finish' || (currentClassTaskAll.length > 0 && currentTaskFinished) || currentClassTaskAll.length == 0) {
          currentStatusLocal = 'finished'
        }
        // waiting
        else if(currentProgress.status == 'done' && (currentClassTaskAll.length > 0 && currentTaskResolved)) {
          currentStatusLocal = 'waiting'
        }
        // unresolve
        else if(currentTaskUnresolved && currentClassTaskAll.length > 0) {
          currentStatusLocal = 'unfinished'
        }
      }
    } else {
      // lock if still setup
      currentStatusLocal = 'locked'
    }
    setCurrentStatus(currentStatusLocal)
  }, [curriculum])

  useEffect(() => {
    if (currentStatus) {
      onStatusChanged(currentStatus)
    }
  }, [currentStatus,curriculum])

  return (
    <CollapseChild status={currentStatus} curriculumData={curriculum} />
  )
}

export default function Collapse({ categoryData }: CollapseProps) {
    const dispatch = useDispatch()
    const activeCollapse = useSelector((state: RootState) => state.collapseState.activeCollapse)
    const curriculumData = useSelector((state: RootState) => classCurriculumByCategoryId(state,categoryData.id))
    const [statusses,setStatusses] = useState<Array<StatusType>>([])
    const studentTaskAll = useSelector(getRegistrantTaskAll)

    return (
        <div className="flex flex-col">
            <button onClick={() => {
                dispatch(setActiveCollapse(categoryData.id))
            }} className={`flex flex-row items-center bg-primary-surface border border-neutral-40 p-3`}>
                {
                  statusses.includes("waiting") || statusses.includes("unfinished") ? <div className="text-white rounded-lg bg-yellow-600 p-0.5"><HiOutlineClock /></div> : 
                  ( statusses.length == 0 || (!statusses.includes("waiting") && !statusses.includes("unfinished") && !statusses.includes("finished")) ? <div className="text-[#A4A4A4]"><HiOutlineLockClosed /></div>:
                  ( !statusses.includes("waiting") && !statusses.includes("unfinished") && statusses.includes("finished") && statusses.length > 0 ? <div className="text-white rounded-lg bg-green-600 p-0.5"><HiCheck /></div>:<div className="rounded-lg p-0.5"></div>))
                }
                <div className="flex flex-col gap-1 ml-3 mr-auto items-start">
                    <h3 className="font-bold text-left">{categoryData.title}</h3>
                    <span className="text-xs">0/{curriculumData.length} | 28 menit</span>
                </div>
                {activeCollapse != categoryData.id ? <HiChevronDown /> : <HiChevronUp />}
            </button>
            <div className={`flex flex-col transition-all duration-500 overflow-y-hidden ${activeCollapse == categoryData.id ? 'max-h-[1000px]' : 'max-h-[0]'}`}>
                {curriculumData.map((curriculum: CurriculumType) => {
                    return <CollapseItem key={curriculum.id} curriculum={curriculum} onStatusChanged={(item: StatusType) => statusses.splice(0,0,item)} />
                })}
            </div>
        </div>
    )
}
