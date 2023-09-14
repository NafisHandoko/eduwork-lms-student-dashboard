import { NavLink } from "react-router-dom";

export default function TabMenu({ path, text }: any) {
    return (
        <NavLink
            to={path}
            className={({ isActive, isPending }) =>
                `border-4 border-transparent flex items-center justify-center px-2 h-full ${isActive ? 'border-b-primary-main text-primary-main' : 'text-neutral-70'}`
            }
        >
            {text}
        </NavLink>
    )
}
