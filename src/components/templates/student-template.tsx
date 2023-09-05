import { useState } from 'react'
import LeftSidebar from '../molecules/left-sidebar'
import Topbar from '../molecules/topbar'

const Default = function ({ children, title }: any) {
    const [isExpand, setIsExpand] = useState(true)

    return (
        <div className="flex flex-row items-stretch h-screen w-full">
            {/* left-sidebar */}
            <LeftSidebar isExpand={isExpand}></LeftSidebar>

            {/* main content */}
            <div className="w-full">
                {/* topbar */}
                <Topbar.Default title={title} isExpand={isExpand} setIsExpand={setIsExpand} />

                {/* main content */}
                {children}
            </div>
        </div>
    )
}

const ClassChapter = function ({ children }: any) {
    const [isExpand, setIsExpand] = useState(true)

    return (
        <div className="flex flex-row items-stretch h-screen max-w-full">
            {/* left-sidebar */}
            <LeftSidebar isExpand={isExpand}></LeftSidebar>

            {/* main content */}
            <div className="w-full">
                {/* topbar */}
                <Topbar.ClassChapter isExpand={isExpand} setIsExpand={setIsExpand} />

                {/* main content */}
                {children}
            </div>
        </div>
    )
}

const StudentTemplate = {
    Default, ClassChapter
}

export default StudentTemplate
