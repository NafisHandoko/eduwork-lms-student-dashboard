import { HiCheck, HiChevronDown, HiChevronUp, HiOutlineExclamationCircle, HiOutlineLockClosed, HiXMark } from "react-icons/hi2"
import { useDispatch, useSelector } from "react-redux";
import { setActiveCollapse } from "../../store/collapseSlice";
import { AppDispatch, RootState } from "../../store";
import { CategoryType, CurriculumType } from "@/src/store/types/ClassTypes";
import { classActions, classActiveCurriculum, classCurriculumAll, classCurriculumByCategoryId } from "@/src/store/classSlice";

interface CollapseChildProps {
    status: 'finished' | 'ongoing' | 'locked';
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
            dispatch(classActions.setActiveCurriculum(curriculumData.id))
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }} className={`flex flex-row items-center gap-3 px-3 py-2 border bg-white ${status == 'locked' ? '!bg-neutral-20' : ''} ${activeCurriculum == curriculumData.id ? '!bg-blue-100':''} cursor-pointer hover:bg-blue-100`} >
            {status == 'finished' ?
                <div className="text-[#0C8048]"><HiCheck /></div> : status == 'ongoing' ?
                    <div className="text-white rounded-lg bg-danger-main p-0.5"><HiXMark /></div> : status == 'locked' ?
                        <div className="text-[#A4A4A4]"><HiOutlineLockClosed /></div> : ''
            }
            {/* <h4 className={status == 'locked' ? 'text-[#A9A9A9]' : 'text-text-heading'}>News Portal Introduction - What you will build asdasda</h4> */}
            <h4 className={status == 'locked' ? 'text-[#A9A9A9]' : 'text-text-heading'}>{curriculumData.title}</h4>
        </div>
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
                    <CollapseChild status="finished" key={curriculum.id} curriculumData={curriculum} />
                ))}
            </div>
        </div>
    )
}
