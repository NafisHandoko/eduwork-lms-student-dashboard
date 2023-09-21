import { useState } from "react"
import { HiXMark } from "react-icons/hi2"

interface AlertProps {
    text?: string;
    type: 'warning' | 'success' | 'danger';
}

export default function Alert({ text, type }: AlertProps) {
    const [isDismissed, setIsDismissed] = useState(false)
    let _bg = type === 'warning' ? 'bg-flowkit-cream' : type === 'danger' ? 'bg-danger-surface' : type === 'success' ? 'bg-success-surface' : ''

    return (
        <div className={`px-7 py-5 ${_bg} flex-row justify-between gap-7 items-start ${isDismissed ? 'hidden' : 'flex'}`}>
            <p>{text}</p>
            <button
                className="mt-1 text-xl text-gray-600 hover:text-black"
                onClick={() => setIsDismissed(true)}
            >
                <HiXMark />
            </button>
        </div>
    )
}