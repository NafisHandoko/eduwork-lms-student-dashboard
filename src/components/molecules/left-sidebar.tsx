import EduworkLogo from '../../assets/eduwork-logo.png'
import SidebarMenu from '../atoms/sidebar-menu'

export default function LeftSidebar({ isExpand }: any) {
    return (
        <div className={`h-full bg-white transition-all py-3 ${isExpand ? 'w-1/6' : 'w-[5%]'}`}>
            <img src={EduworkLogo} alt="" className='px-6' />
            <nav className="flex flex-col py-3">
                <SidebarMenu path="/notifications" icon="globe" text="Notifications" />
                <SidebarMenu path="/my-class" icon="bullseye" text="My Class" />
                <SidebarMenu path="/list-class" icon="laptop" text="List Class" />
            </nav>
        </div>
    )
}