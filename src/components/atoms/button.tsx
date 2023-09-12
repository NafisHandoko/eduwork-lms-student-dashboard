export default function Button({ text, type, className, children, ...props }: any) {
    let _bg = 'bg-primary-main'
    let _cr = 'text-white'

    if (type === 'primary') {
        _bg = 'bg-primary-main'
    }
    if (type === 'success') {
        _bg = 'bg-flowkit-green'
    }

    return (
        <button className={`rounded-full px-5 py-2 text-white whitespace-nowrap ${_bg} ${_cr} ${className}`} {...props}>{text || children}</button>
    )
}
