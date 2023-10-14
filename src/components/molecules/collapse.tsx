import { HiCheck, HiChevronDown, HiChevronUp, HiOutlineExclamationCircle, HiOutlineLockClosed, HiXMark } from "react-icons/hi2"
import { useDispatch, useSelector } from "react-redux";
import { setActiveCollapse } from "../../store/collapseSlice";
import { RootState } from "../../store";
import { setActiveCurriculumState } from "../../store/classSlice";

interface CollapseChildProps {
    status: 'finished' | 'ongoing' | 'locked';
    curriculumData: any;
}
interface CollapseProps {
    status: 'finished' | 'ongoing' | 'locked';
    categoryData: any;
    curriculumData: any[];
}

function CollapseChild({ status, curriculumData }: CollapseChildProps) {
    const activeCurriculum: any = useSelector((state: RootState) => state.classState.activeCurriculum)
    const dispatch = useDispatch();

    const handleActiveCurriculum = () => {
        if (curriculumData) {
            dispatch(setActiveCurriculumState(curriculumData))
        }
    }

    return (
        <button onClick={handleActiveCurriculum} className={`hover:bg-primary-surface flex flex-row items-center gap-3 px-3 py-2 border border-neutral-40 ${status == 'locked' ? 'bg-neutral-20' : activeCurriculum.id == curriculumData.id ? 'bg-primary-surface' : 'bg-white'}`}>
            {status == 'finished' ?
                <div className="text-[#0C8048]"><HiCheck /></div> : status == 'ongoing' ?
                    <div className="text-white rounded-lg bg-danger-main p-0.5"><HiXMark /></div> : status == 'locked' ?
                        <div className="text-[#A4A4A4]"><HiOutlineLockClosed /></div> : ''
            }
            {/* <h4 className={status == 'locked' ? 'text-[#A9A9A9]' : 'text-text-heading'}>News Portal Introduction - What you will build asdasda</h4> */}
            <h4 className={status == 'locked' ? 'text-[#A9A9A9]' : 'text-text-heading'}>{curriculumData.title}</h4>
        </button>
    )
}

export default function Collapse({ status, categoryData, curriculumData }: CollapseProps) {
    const dispatch = useDispatch()
    const activeCollapse = useSelector((state: RootState) => state.collapseState.activeCollapse)

    return (
        <div className="flex flex-col">
            <button onClick={() => dispatch(setActiveCollapse(categoryData.id))} className={`flex flex-row items-center bg-primary-surface border border-neutral-40 p-3`}>
                {status == 'finished' ?
                    <HiCheck /> : status == 'ongoing' ?
                        <div className="bg-[#E0D700] rounded-lg p-1"><HiOutlineExclamationCircle /></div> : status == 'locked' ?
                            <HiOutlineLockClosed /> : ''
                }
                <div className="flex flex-col gap-1 ml-3 mr-auto items-start">
                    <h3 className="font-bold">{categoryData.title}</h3>
                    <span className="text-xs">0/{curriculumData.length} | 28 menit</span>
                </div>
                {activeCollapse != categoryData.id ? <HiChevronDown /> : <HiChevronUp />}
            </button>
            <div className={`flex flex-col transition-all duration-500 overflow-y-hidden ${activeCollapse != categoryData.id ? 'max-h-[0]' : 'max-h-[1000px]'}`}>
                {curriculumData && curriculumData.map((curriculum) => (
                    <CollapseChild status="finished" key={curriculum.id} curriculumData={curriculum} />
                ))}
            </div>
        </div>
    )
}
