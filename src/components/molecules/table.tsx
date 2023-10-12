import { ReactNode } from 'react'

interface TColumnProps {
    children: string | ReactNode;
}
interface TRowProps {
    children: ReactNode;
}
interface THeaderProps {
    children: ReactNode;
}
interface TBodyProps {
    children: ReactNode;
}
interface TableProps {
    children: ReactNode;
}

export function TColumn({ children }: TColumnProps) {
    return (
        <td className="table-cell px-7 py-2">{children}</td>
    )
}

export function TRow({ children }: TRowProps) {
    return (
        <tr className="table-row border-y border-neutral-40">{children}</tr>
    )
}

export function THeader({ children }: THeaderProps) {
    return (
        <thead className="table-header-group text-text-paragraph">
            <tr className="table-row bg-[#F8F8F8] border-y border-neutral-40 text-center">{children}</tr>
        </thead>
    )
}

export function TBody({ children }: TBodyProps) {
    return (
        <tbody className="table-row-group text-text-heading">{children}</tbody>
    )
}

export function Table({ children }: TableProps) {
    return (
        <table className="table table-auto w-full">{children}</table>
    )
}