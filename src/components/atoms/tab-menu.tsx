import { NavLink } from "react-router-dom";

interface TabMenuProps {
    path: string;
    text: string;
}

export default function TabMenu({ path, text }: TabMenuProps) {
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
