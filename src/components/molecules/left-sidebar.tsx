import EduworkLogo from '../../assets/eduwork-logo.png'
import EduworkLogoMini from '../../assets/eduwork-logo-mini.png'
import SidebarMenu from '../atoms/sidebar-menu'
import { HiArrowLeftOnRectangle, HiOutlineBookOpen, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineGlobeAsiaAustralia, HiOutlineQuestionMarkCircle, HiOutlineTrophy, HiOutlineUser, HiXMark } from 'react-icons/hi2'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../../store/sidebarSlice'

export default function LeftSidebar() {
    const isDesktopExpand = useSelector((state: any) => state.sidebar.desktop)
    const isMobileExpand = useSelector((state: any) => state.sidebar.mobile)
    const dispatch = useDispatch()

    return (
        <>
            <div className={`hidden md:block h-full bg-white transition-all ${isDesktopExpand ? 'w-1/6' : 'w-[5%]'}`}>
                <div className={`flex items-center justify-center h-[70px] ${isDesktopExpand ? 'px-6' : 'px-4'}`}>
                    <img src={isDesktopExpand ? EduworkLogo : EduworkLogoMini} alt="" />
                </div>
                <nav className="flex flex-col">
                    <SidebarMenu path="/my-class" icon={<HiOutlineBookOpen className="text-xl" />} text="My Class" />
                    <SidebarMenu path="/events" icon={<HiOutlineCalendarDays className="text-xl" />} text="Events" />
                    <SidebarMenu path="/penyaluran" icon={<HiOutlineBriefcase className="text-xl" />} text="Penyaluran" />
                    <SidebarMenu path="/community" icon={<HiOutlineGlobeAsiaAustralia className="text-xl" />} text="Community" />
                    <SidebarMenu path="/account" icon={<HiOutlineUser className="text-xl" />} text="Account" />
                    <SidebarMenu path="/apresiasi" icon={<HiOutlineTrophy className="text-xl" />} text="Apresiasi" />
                    <SidebarMenu path="/customer-support" icon={<HiOutlineQuestionMarkCircle className="text-xl" />} text="Customer Support" />
                    <SidebarMenu path="/logout" icon={<HiArrowLeftOnRectangle className="text-xl" />} text="Logout" />
                </nav>
            </div>
            <div className={`md:hidden bg-white text-black-primary text-center fixed z-20 top-0 right-[100%] transition-all w-1/2 h-screen flex items-center justify-center ${isMobileExpand ? 'right-[50%] md:right-[100%]' : 'right-[100%]'}`}>
                <button onClick={() => dispatch(toggleSidebar())} className='text-3xl block md:hidden py-5 absolute top-2 right-6'>
                    <HiXMark />
                    <ul className='container mx-auto flex flex-col items-center justify-between gap-7'>
                        <li className='text-xl font-medium'><a href="#">Home</a></li>
                        <li className='text-xl font-medium'><a href="#about">About</a></li>
                        <li className='text-xl font-medium'><a href="#services">Services</a></li>
                        <li className='text-xl font-medium'><a href="#skills">Skills</a></li>
                        <li className='text-xl font-medium'><a href="#works">Works</a></li>
                    </ul>
                </button>
            </div>
        </>
    )
}
