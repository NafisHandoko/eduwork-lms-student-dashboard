import { useState } from "react"
import { HiCheckCircle, HiExclamationCircle, HiXMark } from "react-icons/hi2"

interface ToastProps {
    type: 'success' | 'danger';
    title?: string;
    body?: string;
}

export default function Toast({ type, title, body }: ToastProps) {
    let _bg = 'bg-gray-100'
    let _cr = 'text-gray-600 border-gray-700'

    if (type === 'danger') {
        _bg = 'bg-danger-surface'
        _cr = 'text-danger-main border-danger-main'
    }
    if (type === 'success') {
        _bg = 'bg-success-surface'
        _cr = 'text-success-main border-success-main'
    }

    const [isDismissed, setIsDismissed] = useState(false)

    return (
        <div className={`rounded-lg p-2 border flex flex-row items-center justify-between ${_bg} ${_cr} ${isDismissed ? 'hidden' : ''}`}>
            <div className="flex flex-row items-center gap-3">
                <div className="text-xl">
                    {type == 'success' && <HiCheckCircle />}
                    {type == 'danger' && <HiExclamationCircle />}
                </div>
                <div>
                    <span className="font-medium">{title}</span>
                    &nbsp;:&nbsp;
                    <span>{body}</span>
                </div>
            </div>
            <button onClick={() => setIsDismissed(true)}><HiXMark /></button>
        </div>
    )
}