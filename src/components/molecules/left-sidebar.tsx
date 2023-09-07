import EduworkLogo from '../../assets/eduwork-logo.png'
import EduworkLogoMini from '../../assets/eduwork-logo-mini.png'
import SidebarMenu from '../atoms/sidebar-menu'

export default function LeftSidebar({ isExpand }: any) {
    return (
        <div className={`h-full bg-white transition-all py-3 ${isExpand ? 'w-1/6' : 'w-[5%]'}`}>
            <div className={`flex items-center justify-center py-2 ${isExpand ? 'px-6' : 'px-4'}`}>
                <img src={isExpand ? EduworkLogo : EduworkLogoMini} alt="" />
            </div>
            {isExpand ?
                <nav className="flex flex-col py-3">
                    <SidebarMenu path="/notifications" icon="globe" text="Notifications" />
                    <SidebarMenu path="/my-class" icon="bullseye" text="My Class" />
                    <SidebarMenu path="/list-class" icon="laptop" text="List Class" />
                </nav> :
                <nav className="flex flex-col py-3">
                    <SidebarMenu path="/notifications" icon="globe" />
                    <SidebarMenu path="/my-class" icon="bullseye" />
                    <SidebarMenu path="/list-class" icon="laptop" />
                </nav>
            }
        </div>
    )
}
