import { ReactNode } from "react";

interface DropdownProps {
    className?: string;
    children: string | ReactNode
}

export default function Dropdown({ className, children }: DropdownProps) {
    return (
        <select className={`rounded-full border border-primary-main text-primary-main px-4 py-1.5 ${className}`}>
            {children}
        </select>
    )
}
