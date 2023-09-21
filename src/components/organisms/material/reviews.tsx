import { HiPlus, HiStar, HiXMark } from "react-icons/hi2"
import { useState, Dispatch, SetStateAction, MouseEventHandler } from 'react'
import Button from "../../atoms/button"
import Dropdown from "../../atoms/dropdown"

interface ReviewModalProps {
    modalDismissed: boolean;
    setModalDismissed: Dispatch<SetStateAction<boolean>>;
    onConfirm?: MouseEventHandler
}

function ReviewModal({ modalDismissed, setModalDismissed, onConfirm = () => { } }: ReviewModalProps) {
    const [kritikSaran, setKritikSaran] = useState('')

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ${modalDismissed ? 'hidden' : ''}`}>
            <div className="bg-white rounded-lg flex flex-col w-full md:w-1/3">
                <div className="flex flex-col gap-4 p-5">
                    <div className="flex flex-row gap-2 items-center justify-between">
                        <h1 className="text-neutral-90 text-xl font-medium">Review Materi</h1>
                        <button onClick={() => setModalDismissed(true)}><HiXMark /></button>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span>Rating :</span>
                        <div className="flex flex-row items-center gap-1">
                            <HiStar className="text-secondary-main" />
                            <HiStar className="text-secondary-main" />
                            <HiStar className="text-secondary-main" />
                            <HiStar className="text-secondary-main" />
                            <HiStar className="text-neutral-40" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span>Kritik & Saran</span>
                        <textarea
                            className="bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
                            placeholder="Tulis kritik dan saran di sini..."
                            value={kritikSaran}
                            onChange={(e) => setKritikSaran(e.target.value)}
                            rows={5}
                        />

                    </div>
                </div>
                <div className="bg-neutral-20 flex flex-col p-5 rounded-b-lg">
                    <div className="flex flex-row items-center justify-between gap-2">
                        <button className="bg-secondary-main text-sm text-white px-4 py-2 rounded-lg">Complain</button>
                        <div className="flex flex-row gap-3">
                            <button className="bg-white text-sm text-neutral-90 px-4 py-2 rounded-lg" onClick={() => setModalDismissed(true)}>Close</button>
                            <button className={`bg-primary-main text-sm text-white px-4 py-2 rounded-lg`} onClick={onConfirm}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ReviewCard() {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'

    return (
        <div className="bg-white shadow-xl rounded-lg flex flex-row items-stretch p-7 gap-5">
            <div className="bg-center bg-cover w-1/6 rounded-lg" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
            <div className="flex flex-col gap-2 w-full">
                <span className="text-text-heading font-medium text-lg">Pelita Nur Najmina</span>
                <span className="text-sm text-[#989898]">30 Agustus 2023</span>
                <div className="flex flex-row items-center gap-1">
                    <HiStar className="text-secondary-main" />
                    <HiStar className="text-secondary-main" />
                    <HiStar className="text-secondary-main" />
                    <HiStar className="text-secondary-main" />
                    <HiStar className="text-neutral-40" />
                </div>
                <p className="text-text-paragraph">Penjelasan selalu jelas dan materi yang diajarkan sangat bagus dan mudah dipahami. saya juga bisa punya portfolio baru dari modul yang diberikan</p>
            </div>
        </div>
    )
}

export default function Reviews() {
    const [modalDismissed, setModalDismissed] = useState<boolean>(true)

    return (
        <div className="px-7 flex flex-col gap-5 items-start">
            <div className="flex flex-row gap-2 justify-between w-full">
                <Button type="primary" onClick={() => setModalDismissed(false)} className="flex flex-row items-center gap-2">
                    <span>Tambah Ulasan</span>
                    <HiPlus />
                </Button>
                <Dropdown>
                    <option>Terbaru</option>
                    <option>Terlama</option>
                </Dropdown>
            </div>
            <div className="flex flex-col gap-5">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
            <ReviewModal modalDismissed={modalDismissed} setModalDismissed={setModalDismissed} />
        </div>
    )
}
