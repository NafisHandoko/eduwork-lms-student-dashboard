import { ReactNode, ChangeEventHandler } from 'react'

interface InputProps {
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    className?: string;
    placeholder?: string;
    value?: string | number | readonly string[] | undefined;
    onChange?: ChangeEventHandler
}

export default function Input({ prefixIcon, suffixIcon, className, placeholder, value, onChange }: InputProps) {
    return (
        <form onSubmit={() => { }} className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none">{prefixIcon}</div>
            {/* <button type='button' onClick={() => { }} className="flex absolute inset-y-0 left-0 items-center pl-5 cursor-pointer">
                                <i className="bi bi-emoji-smile text-relazee-blue"></i>
                            </button> */}
            <input
                type="text"
                id="simple-search"
                className={`bg-white border border-neutral-40 text-sm rounded-full block w-full ${prefixIcon ? 'px-12' : 'px-5'} p-2.5 placeholder-neutral-60 ${className}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                <i className="bi bi-send-fill text-relazee-blue"></i>
                            </button> */}
            <div className="flex absolute inset-y-0 right-0 items-center pr-5 cusror pointer">{suffixIcon}</div>
        </form>
    )
}
