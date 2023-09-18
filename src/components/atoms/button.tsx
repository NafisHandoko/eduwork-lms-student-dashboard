import { ReactNode, MouseEventHandler } from 'react'

interface ButtonProps {
    text?: string | ReactNode;
    type?: 'primary' | 'success';
    className?: string;
    children?: ReactNode;
    onClick?: MouseEventHandler
}

export default function Button({ text, type, className, children, onClick }: ButtonProps) {
    let _bg = 'bg-primary-main'
    let _cr = 'text-white'

    if (type === 'primary') {
        _bg = 'bg-primary-main'
    }
    if (type === 'success') {
        _bg = 'bg-flowkit-green'
    }

    return (
        <button
            onClick={onClick}
            className={`rounded-full px-5 py-2 text-white whitespace-nowrap ${_bg} ${_cr} ${className}`}
        >
            {text || children}
        </button>
    )
}
