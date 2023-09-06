export default function Dropdown({ className, children, ...props }: any) {
    return (
        <select className={`rounded-full border border-primary-main text-primary-main px-4 py-1.5 ${className}`} {...props}>
            {children}
        </select>
    )
}
