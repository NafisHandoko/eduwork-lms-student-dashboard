import EduworkLogo from '../../assets/eduwork-logo.png'
import EduworkLogoMini from '../../assets/eduwork-logo-mini.png'
import SidebarMenu from '../atoms/sidebar-menu'
import { HiArrowLeftOnRectangle, HiOutlineBookOpen, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineGlobeAsiaAustralia, HiOutlineQuestionMarkCircle, HiOutlineTrophy, HiOutlineUser, HiXMark } from 'react-icons/hi2'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../../store/sidebarSlice'
import { RootState } from '../../store'

export default function LeftSidebar() {
    const isDesktopExpand = useSelector((state: RootState) => state.sidebarState.desktop)
    const isMobileExpand = useSelector((state: RootState) => state.sidebarState.mobile)
    const dispatch = useDispatch()

    return (
        <>
            <div className={`hidden md:block h-full bg-white transition-all duration-100 z-[100] ${isDesktopExpand ? 'w-1/6' : 'w-[5em]'} min-h-[100vh] shadow`}>
                <div className={`flex items-center justify-center h-[70px] ${isDesktopExpand ? 'px-6' : 'px-4'}`}>
                    <img src={isDesktopExpand ? EduworkLogo : EduworkLogoMini} alt="" />
                </div>
                <nav className="flex flex-col">
                    <SidebarMenu path="/my-class" icon={<HiOutlineBookOpen className="flex-shrink-0" />} text="My Class" />
                    <SidebarMenu path="/events" icon={<HiOutlineCalendarDays className="flex-shrink-0" />} text="Events" />
                    <SidebarMenu path="/penyaluran" icon={<HiOutlineBriefcase className="flex-shrink-0" />} text="Penyaluran" />
                    <SidebarMenu path="/forum" icon={<HiOutlineGlobeAsiaAustralia className="flex-shrink-0" />} text="Forum" />
                    {/* <SidebarMenu path="/apresiasi" icon={<HiOutlineTrophy className="flex-shrink-0" />} text="Apresiasi" /> */}
                    <SidebarMenu path="/customer-support" icon={<HiOutlineQuestionMarkCircle className="flex-shrink-0" />} text="Customer Support" />
                    <hr className='pb-2 mt-2' />
                    <SidebarMenu path="/account" icon={<HiOutlineUser className="flex-shrink-0" />} text="Account" />
                    <SidebarMenu path="/logout" icon={<HiArrowLeftOnRectangle className="flex-shrink-0" />} text="Logout" />
                </nav>
            </div>
            <div className={`md:hidden bg-white text-black-primary text-center fixed z-20 top-0 right-[100%] transition-all w-1/2 h-screen flex items-center justify-center ${isMobileExpand ? 'right-[50%] md:right-[100%]' : 'right-[100%]'}`}>
                <button onClick={() => dispatch(toggleSidebar())} className='text-3xl block md:hidden py-5 absolute top-2 right-6'>
                    <HiXMark />
                    <ul className='container mx-auto flex flex-col items-center justify-between gap-7'>
                        <li className='font-medium'><a href="#">Home</a></li>
                        <li className='font-medium'><a href="#about">About</a></li>
                        <li className='font-medium'><a href="#services">Services</a></li>
                        <li className='font-medium'><a href="#skills">Skills</a></li>
                        <li className='font-medium'><a href="#works">Works</a></li>
                    </ul>
                </button>
            </div>
        </>
    )
}
