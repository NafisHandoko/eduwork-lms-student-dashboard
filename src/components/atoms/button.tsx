import { ReactNode, MouseEventHandler } from 'react'

interface ButtonProps {
    text?: string | ReactNode;
    type?: 'primary' | 'success' | 'danger' | 'warning' | 'light';
    borderRadius?: 'lg' | 'full'
    size?: 'small' | 'normal'
    className?: string;
    children?: ReactNode;
    onClick?: MouseEventHandler
}

export default function Button({ text, type = 'primary', borderRadius = 'full', size = 'normal', className, children, onClick }: ButtonProps) {
    let _bg = type === 'primary' ? 'bg-primary-main' : type === 'success' ? 'bg-flowkit-green' : type === 'danger' ? 'bg-danger-main' : type === 'warning' ? 'bg-secondary-main' : type === 'light' ? 'bg-white' : ''
    let _cr = type === 'light' ? 'text-neutral-90' : 'text-white'
    let _size = size === 'small' ? 'px-4 py-2 text-sm' : size === 'normal' ? 'px-5 py-2' : ''

    return (
        <button
            onClick={onClick}
            className={`rounded-${borderRadius} ${_size} whitespace-nowrap ${_bg} ${_cr} ${className}`}
        >
            {text || children}
        </button>
    )
}
