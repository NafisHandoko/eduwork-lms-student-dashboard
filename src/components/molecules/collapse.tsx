import { useState } from "react"
import { HiCheck, HiChevronDown, HiChevronUp, HiOutlineLockClosed, HiXMark } from "react-icons/hi2"

export default function Collapse() {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <div className="flex flex-col">
            <button onClick={() => setIsCollapsed(!isCollapsed)} className="flex flex-row items-center bg-primary-surface border border-neutral-40 p-3">
                <HiCheck />
                <div className="flex flex-col gap-1 ml-3 mr-auto items-start">
                    <h3 className="font-bold">Introduction Free Class</h3>
                    <span className="text-xs">0/4 | 28 menit</span>
                </div>
                {isCollapsed ? <HiChevronDown /> : <HiChevronUp />}
            </button>
            <div className={`flex flex-col transition-all duration-500 overflow-y-hidden ${isCollapsed ? 'max-h-[0]' : 'max-h-[1000px]'}`}>
                <div className="bg-white flex flex-row items-center gap-3 px-3 py-2 border border-neutral-40">
                    <div className="text-[#0C8048]"><HiCheck /></div>
                    <h4 className="text-text-heading">News Portal Introduction - What you will build asdasda</h4>
                </div>
                <div className="bg-white flex flex-row items-center gap-3 px-3 py-2 border border-neutral-40">
                    <div className="text-white rounded-lg bg-danger-main p-0.5"><HiXMark /></div>
                    <h4 className="text-text-heading">News Portal Introduction - What you will build asdasda</h4>
                </div>
                <div className="bg-[#F5F5F5] text-[#A9A9A9] flex flex-row items-center gap-3 px-3 py-2 border border-neutral-40">
                    <div className=""><HiOutlineLockClosed /></div>
                    <h4 className="">News Portal Introduction - What you will build asdasda</h4>
                </div>
            </div>
        </div>
    )
}
