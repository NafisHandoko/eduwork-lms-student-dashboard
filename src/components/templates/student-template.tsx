import LeftSidebar from '../molecules/left-sidebar'
import Topbar from '../molecules/topbar'

const Default = function ({ children, title, isExpand, setIsExpand }: any) {
    return (
        <div className="flex flex-row items-stretch max-h-screen w-full">
            {/* left-sidebar */}
            <LeftSidebar isExpand={isExpand}></LeftSidebar>

            {/* main content */}
            <div className="w-full overflow-y-scroll">
                {/* topbar */}
                <Topbar.Default title={title} isExpand={isExpand} setIsExpand={setIsExpand} className="fixed w-full z-20" />

                {/* main content */}
                <div className='mt-16'>
                    {children}
                </div>
            </div>
        </div>
    )
}

const ClassChapter = function ({ children, isExpand, setIsExpand }: any) {
    return (
        <div className="flex flex-row items-stretch max-h-screen w-full">
            {/* left-sidebar */}
            <LeftSidebar isExpand={isExpand}></LeftSidebar>

            {/* main content */}
            <div className="w-full overflow-y-scroll">
                {/* topbar */}
                <Topbar.ClassChapter isExpand={isExpand} setIsExpand={setIsExpand} className="fixed w-full z-20" />

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
