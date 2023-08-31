import LeftSidebar from '../molecules/left-sidebar'

export default function StudentTemplate({ children, isExpand }: any) {
    return (
        <div className="flex flex-row items-stretch h-screen bg-primary-surface w-full">
            {/* left-sidebar */}
            <LeftSidebar isExpand={isExpand}></LeftSidebar>

            {/* main content */}
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}
