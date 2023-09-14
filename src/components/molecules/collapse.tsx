import { useState } from "react"
import { HiCheck, HiChevronDown, HiChevronUp, HiOutlineExclamationCircle, HiOutlineLockClosed, HiXMark } from "react-icons/hi2"

function CollapseChild({ status }: any) {
    return (
        <div className={`flex flex-row items-center gap-3 px-3 py-2 border border-neutral-40 ${status == 'locked' ? 'bg-neutral-20' : 'bg-white'}`}>
            {status == 'finished' ?
                <div className="text-[#0C8048]"><HiCheck /></div> : status == 'ongoing' ?
                    <div className="text-white rounded-lg bg-danger-main p-0.5"><HiXMark /></div> : status == 'locked' ?
                        <div className="text-[#A4A4A4]"><HiOutlineLockClosed /></div> : ''
            }
            <h4 className={status == 'locked' ? 'text-[#A9A9A9]' : 'text-text-heading'}>News Portal Introduction - What you will build asdasda</h4>
        </div>
    )
}

export default function Collapse({ status }: any) {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <div className="flex flex-col">
            <button onClick={() => setIsCollapsed(!isCollapsed)} className="flex flex-row items-center bg-primary-surface border border-neutral-40 p-3">
                {status == 'finished' ?
                    <HiCheck /> : status == 'ongoing' ?
                        <div className="bg-[#E0D700] rounded-lg p-1"><HiOutlineExclamationCircle /></div> : status == 'locked' ?
                            <HiOutlineLockClosed /> : ''
                }
                <div className="flex flex-col gap-1 ml-3 mr-auto items-start">
                    <h3 className="font-bold">Introduction Free Class</h3>
                    <span className="text-xs">0/4 | 28 menit</span>
                </div>
                {isCollapsed ? <HiChevronDown /> : <HiChevronUp />}
            </button>
            <div className={`flex flex-col transition-all duration-500 overflow-y-hidden ${isCollapsed ? 'max-h-[0]' : 'max-h-[1000px]'}`}>
                <CollapseChild status="finished" />
                <CollapseChild status="ongoing" />
                <CollapseChild status="locked" />
            </div>
        </div>
    )
}
