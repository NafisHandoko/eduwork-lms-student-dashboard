import Dropdown from "../atoms/dropdown"
import TabMenu from "../atoms/tab-menu"
import { toggleSidebar } from "../../store/sidebarSlice"
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineBell } from "react-icons/hi2"

const Default = function ({ title, className, ...props }: any) {
    const dispatch = useDispatch()
    const isDesktopExpand = useSelector((state: any) => state.sidebar.desktop)

    return (
        <div className={`h-[70px] px-4 bg-white flex flex-row gap-4 items-center ${className}`} {...props}>
            <button onClick={() => dispatch(toggleSidebar())}><i className="bi bi-list text-xl font-bold"></i></button>
            <h1 className="text-xl font-bold">{title}</h1>
            <HiOutlineBell className={`ml-auto text-xl ${isDesktopExpand ? 'md:mr-20' : ''}`} />
        </div>
    )
}

const ClassChapter = function ({ className, ...props }: any) {
    const dispatch = useDispatch()
    const isDesktopExpand = useSelector((state: any) => state.sidebar.desktop)

    return (
        <div className={`h-[70px] px-4 bg-white flex flex-row gap-4 items-center ${className}`} {...props}>
            <button onClick={() => dispatch(toggleSidebar())}><i className="bi bi-list text-xl font-bold"></i></button>
            <Dropdown>
                <option value="0">Kelas Digital Marketing</option>
                <option value="1">Kelas UI/UX Design</option>
            </Dropdown>
            <div className="flex flex-row h-full gap-2">
                <TabMenu path="material" text="Material" />
                <TabMenu path="all-task" text="All Task" />
            </div>
            <HiOutlineBell className={`ml-auto text-xl ${isDesktopExpand ? 'md:mr-20' : ''}`} />
        </div>
    )
}

const Topbar = {
    Default, ClassChapter
}

export default Topbar