import Dropdown from "../atoms/dropdown"
import TabMenu from "../atoms/tab-menu"
import { toggleSidebar } from "../../store/sidebarSlice"
import { useDispatch } from 'react-redux'
import { HiOutlineBell } from "react-icons/hi2"

interface TopbarDefaultProps {
    title?: string;
    className?: string;
}
interface TopbarClassChapterProps {
    className?: string;
}

const Default = function ({ title, className }: TopbarDefaultProps) {
    const dispatch = useDispatch()

    return (
        <div className={`h-[70px] px-4 bg-white flex flex-row gap-4 items-center ${className}`}>
            <button onClick={() => dispatch(toggleSidebar())}><i className="bi bi-list text-xl font-bold"></i></button>
            <h1 className="text-xl font-bold">{title}</h1>
            <HiOutlineBell className={`ml-auto text-xl`} />
        </div>
    )
}

const ClassChapter = function ({ className }: TopbarClassChapterProps) {
    const dispatch = useDispatch()

    return (
        <div className={`h-[70px] px-4 bg-white flex flex-row gap-4 items-center ${className}`}>
            <button onClick={() => dispatch(toggleSidebar())}><i className="bi bi-list text-xl font-bold"></i></button>
            <Dropdown>
                <option value="0">Kelas Digital Marketing</option>
                <option value="1">Kelas UI/UX Design</option>
            </Dropdown>
            <div className="flex flex-row h-full gap-2">
                <TabMenu path="material/main" text="Material" />
                <TabMenu path="all-task" text="All Task" />
            </div>
            <HiOutlineBell className={`ml-auto text-xl`} />
        </div>
    )
}

const Topbar = {
    Default, ClassChapter
}

export default Topbar