import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { ReactNode } from 'react'
import { RootState } from "../../store";

interface SidebarMenuProps {
    path: string;
    icon: ReactNode;
    text: string;
}

export default function SidebarMenu({ path, icon, text }: SidebarMenuProps) {
    const isDesktopExpand = useSelector((state: RootState) => state.sidebarState.desktop)

    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `flex flex-row items-center gap-3 px-6 py-4 border-l-4 ${isActive ? 'bg-primary-surface text-primary-main border-primary-main' : 'bg-white text-neutral-70 border-white hover:bg-primary-surface hover:text-primary-main hover:border-primary-main'}`
            }
        >
            {icon}
            <span className={`${isDesktopExpand ? 'w-full': 'hidden w-0'}  text-xs`}>{text}</span>
        </NavLink>
    )
}
