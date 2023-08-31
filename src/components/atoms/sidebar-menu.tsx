import { NavLink } from "react-router-dom"

export default function SidebarMenu({ path, icon, text }: any) {
    return (
        <NavLink
            to={path}
            className={({ isActive, isPending }) =>
                `flex flex-row items-center gap-3 px-6 py-3 border-l-4 ${isActive ? 'bg-primary-surface text-primary-main border-primary-main' : 'bg-white text-neutral-70 border-white'}`
            }
        >
            <i className={`bi bi-${icon}`}></i>
            <span>{text}</span>
        </NavLink>
    )
}
