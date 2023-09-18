import { SetStateAction, MouseEventHandler, Dispatch } from 'react'
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi2";
import Button from '../atoms/button';

interface ModalProps {
    isDismissed: boolean;
    setIsDismissed: Dispatch<SetStateAction<boolean>>;
    type?: 'danger' | 'success' | 'warning';
    title?: string;
    body?: string;
    confirmBtnText?: string;
    cancelBtnText?: string;
    onConfirm?: MouseEventHandler;
}

export default function Modal({ isDismissed, setIsDismissed, type, title, body, confirmBtnText = 'Confirm', cancelBtnText = 'Cancel', onConfirm = () => { } }: ModalProps) {
    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ${isDismissed ? 'hidden' : ''}`}>
            <div className="bg-white rounded-lg flex flex-col w-full md:w-1/3">
                <div className="flex flex-col gap-3 p-5">
                    <div className="flex flex-row items-center gap-2">
                        {type == 'danger' &&
                            <span className="text-danger-main text-3xl"><HiExclamationCircle /></span>
                        }
                        {type == 'success' &&
                            <span className="text-success-main text-3xl"><HiCheckCircle /></span>
                        }
                        {type == 'warning' &&
                            <span className="text-secondary-main text-3xl"><HiExclamationCircle /></span>
                        }
                        <h1 className="text-neutral-90 text-xl font-medium">{title}</h1>
                    </div>
                    <p className="text-sm text-neutral-70">{body}</p>
                </div>
                <div className="bg-neutral-20 flex flex-col items-end p-3 rounded-b-lg">
                    <div className="flex flex-row items-center gap-2">
                        <Button text={cancelBtnText} type='light' borderRadius='lg' size='small' onClick={() => setIsDismissed(true)} />
                        <Button text={confirmBtnText} type={type} borderRadius='lg' size='small' onClick={onConfirm} />
                    </div>
                </div>
            </div>
        </div>
    )
}
