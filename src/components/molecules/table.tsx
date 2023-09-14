export function TColumn({ children }: any) {
    return (
        <td className="table-cell px-7 py-2">{children}</td>
    )
}

export function TRow({ children }: any) {
    return (
        <tr className="table-row border-y border-neutral-40">{children}</tr>
    )
}

export function THeader({ children }: any) {
    return (
        <thead className="table-header-group text-text-paragraph">
            <tr className="table-row bg-[#F8F8F8] border-y border-neutral-40">{children}</tr>
        </thead>
    )
}

export function TBody({ children }: any) {
    return (
        <tbody className="table-row-group text-text-heading">{children}</tbody>
    )
}

export function Table({ children }: any) {
    return (
        <table className="table table-auto w-full">{children}</table>
    )
}