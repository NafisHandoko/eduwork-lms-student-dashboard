import { HiCheck, HiChevronDown, HiChevronUp, HiOutlineClock, HiOutlineExclamationCircle, HiOutlineLockClosed, HiOutlineLockOpen, HiXMark } from "react-icons/hi2"
import { useDispatch, useSelector } from "react-redux";
import { setActiveCollapse } from "../../store/collapseSlice";
import { AppDispatch, RootState } from "../../store";
import { CategoryType, CurriculumType } from "@/src/store/types/ClassTypes";
import { classActions, classActiveCurriculum, classCategoryById, classCurriculumAll, classCurriculumByCategoryId, classCurriculumById } from "@/src/store/classSlice";
import Skeleton from "./skeleton";
import { getRegistrantTaskAll, selectRegistrantProgressByCurriculumId, selectRegistrantTaskAllByCurriculumId, selectRegistrantTaskFinishedByCurriculumId, selectRegistrantTaskResolvedByCurriculumId, selectRegistrantTaskUnresolvedByCurriculumId } from "@/src/store/registrantSlice";
import { useEffect, useState } from "react";

type StatusType = 'finished' | 'ongoing' | 'waiting' | 'unfinished' | 'unlocked' | 'locked' | null

interface CollapseChildProps {
    status: StatusType
    curriculumData: CurriculumType
}
interface CollapseProps {
    status: 'finished' | 'ongoing' | 'locked';
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
        }} className={`flex flex-row items-center gap-3 px-3 py-2 border bg-white ${status == 'locked' ? '!bg-neutral-20 cursor-not-allowed' : ''} ${activeCurriculum == curriculumData.id ? '!bg-blue-100':''} cursor-pointer hover:bg-blue-100`} >
            {
              status == 'finished' ? <div className="text-[#0C8048]"><HiCheck /></div>: 
                (status == 'waiting' ? <div className="text-white rounded-lg bg-yellow-600 p-0.5"><HiOutlineClock /></div> : 
                  (status == 'unfinished' ? <div className="text-white rounded-lg bg-danger-main p-0.5"><HiXMark /></div> : 
                  (status == 'unlocked' ? <div className="rounded-lg p-0.5"><HiOutlineLockOpen /></div> : 
                    (status == 'locked' ? <div className="text-[#A4A4A4]"><HiOutlineLockClosed /></div> : <div className="text-[#0C8048]"><Skeleton className="h-4 w-4 rounded-lg" /></div>))))
            }
            <h4 className={status == 'locked' ? 'text-[#A9A9A9]' : 'text-text-heading'}>{curriculumData.title}</h4>
        </div>
    )
}

function CollapseItem({curriculum}: {curriculum: CurriculumType}) {
  const activeCurriculumId = useSelector(classActiveCurriculum)
  const activeCurriculum = useSelector((state: RootState) => classCurriculumById(state,activeCurriculumId as unknown as number))
  const activeCurriculumCategory = useSelector((state: RootState) => classCategoryById(state,activeCurriculum?.curriculum_category_id as unknown as number))

  const currentCurriculumCategory = useSelector((state: RootState) => classCategoryById(state, curriculum?.curriculum_category_id as unknown as number))
  
  const currentProgress = useSelector((state: RootState) => selectRegistrantProgressByCurriculumId(state, curriculum.id))
  
  const currentTaskAll = useSelector((state: RootState) => selectRegistrantTaskAllByCurriculumId(state,curriculum.id))
  const currentTaskUnresolved = useSelector((state: RootState) => selectRegistrantTaskUnresolvedByCurriculumId(state, curriculum.id))
  const currentTaskResolved = useSelector((state: RootState) => selectRegistrantTaskResolvedByCurriculumId(state, curriculum.id))
  const currentTaskFinished = useSelector((state: RootState) => selectRegistrantTaskFinishedByCurriculumId(state, curriculum.id))
  
  const currentLocked = ((currentCurriculumCategory?.sort ?? 0) == (activeCurriculumCategory?.sort ?? 0) && ((curriculum.sort as unknown as number) > (activeCurriculum?.sort as unknown as number))) || (currentCurriculumCategory?.sort as unknown as number) > (activeCurriculumCategory?.sort as unknown as number)

  const [currentStatus, setCurrentStatus] = useState<StatusType>(null)
  
  useEffect(() => {
    // is locked
    if (currentLocked) {
      setCurrentStatus('locked')
    } else {
      // is unlocked
      // unlock but not opened
      if (!currentProgress) {
        setCurrentStatus('unlocked')
      }
      // finished 
      else if (currentProgress.status == 'finish' || (currentTaskAll.length > 0 && currentTaskFinished) || currentTaskAll.length == 0) {
        setCurrentStatus('finished')
      }
      // waiting
      else if(currentProgress.status == 'done' || (currentTaskAll.length > 0 && currentTaskResolved)) {
        setCurrentStatus('waiting')
      }
      // unresolve
      else if(currentTaskUnresolved && currentTaskAll.length > 0) {
        setCurrentStatus('unfinished')
      }
      console.log("Title: " + curriculum.title + " T: " +  (currentTaskAll.length))
    }
  }, [])

  return (
    <CollapseChild status={currentStatus} curriculumData={curriculum} />
  )
}

export default function Collapse({ status, categoryData }: CollapseProps) {
    const dispatch = useDispatch()
    const activeCollapse = useSelector((state: RootState) => state.collapseState.activeCollapse)
    const curriculumData = useSelector((state: RootState) => classCurriculumByCategoryId(state,categoryData.id))
    
    return (
        <div className="flex flex-col">
            <button onClick={() => {
                dispatch(setActiveCollapse(categoryData.id))
            }} className={`flex flex-row items-center bg-primary-surface border border-neutral-40 p-3`}>
                {status == 'finished' ?
                    <HiCheck /> : status == 'ongoing' ?
                        <div className="bg-[#E0D700] rounded-lg p-1"><HiOutlineExclamationCircle /></div> : status == 'locked' ?
                            <HiOutlineLockClosed /> : ''
                }
                <div className="flex flex-col gap-1 ml-3 mr-auto items-start">
                    <h3 className="font-bold text-left">{categoryData.title}</h3>
                    <span className="text-xs">0/{curriculumData.length} | 28 menit</span>
                </div>
                {activeCollapse != categoryData.id ? <HiChevronDown /> : <HiChevronUp />}
            </button>
            <div className={`flex flex-col transition-all duration-500 overflow-y-hidden ${activeCollapse == categoryData.id ? 'max-h-[1000px]' : 'max-h-[0]'}`}>
                {curriculumData.map((curriculum) => (
                    <CollapseItem key={curriculum.id} curriculum={curriculum} />
                ))}
            </div>
        </div>
    )
}
