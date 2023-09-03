import { useState } from "react";
import { HiExclamationCircle } from "react-icons/hi2";

export default function Modal({ type, title, body, onConfirm = () => {} }: any) {
    const [isDismissed, setIsDismissed] = useState(false)

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ${isDismissed ? 'hidden' : ''}`}>
            <div className="bg-white rounded-lg flex flex-col w-full md:w-1/3">
                <div className="flex flex-col gap-3 p-5">
                    <div className="flex flex-row items-center gap-2">
                        {type == 'danger' &&
                            <span className="text-danger-main text-3xl"><HiExclamationCircle /></span>
                        }
                        <h1 className="text-neutral-90 text-xl font-medium">{title}</h1>
                    </div>
                    <p className="text-sm text-neutral-70">{body}</p>
                </div>
                <div className="bg-neutral-20 flex flex-col items-end p-3 rounded-b-lg">
                    <div className="flex flex-row items-center gap-2">
                        <button className="bg-white text-sm text-neutral-90 px-4 py-2 rounded-lg" onClick={() => setIsDismissed(true)}>Cancel</button>
                        <button className={`bg-primary-main text-sm text-white px-4 py-2 rounded-lg ${type == 'danger' ? 'bg-danger-main' : ''}`} onClick={onConfirm}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
