import LeftSidebar from '../molecules/left-sidebar'
import Topbar from '../molecules/topbar'
import { ReactNode } from 'react'

interface StudentTemplateDefaultProps {
    children?: ReactNode;
    title?: string;
}
interface StudentTemplateClassChapterProps {
    children?: ReactNode;
}

const Default = function ({ children, title }: StudentTemplateDefaultProps) {
    return (
        <div className="flex flex-row items-stretch max-h-screen w-full">
            {/* left-sidebar */}
            <LeftSidebar />

            {/* main content */}
            <div className="w-full overflow-y-scroll">
                {/* topbar */}
                <Topbar.Default title={title} className="fixed w-full md:w-[90%] z-10" />

                {/* main content */}
                <div className='mt-[70px]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

const ClassChapter = function ({ children }: StudentTemplateClassChapterProps) {
    return (
        <div className="flex flex-row items-stretch max-h-screen w-full">
            {/* left-sidebar */}
            <LeftSidebar />

            {/* main content */}
            <div className="w-full overflow-y-scroll">
                {/* topbar */}
                <Topbar.ClassChapter className="fixed w-full md:w-[90%] z-10" />

                {/* main content */}
                <div className='mt-[70px]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

const StudentTemplate = {
    Default, ClassChapter
}

export default StudentTemplate
