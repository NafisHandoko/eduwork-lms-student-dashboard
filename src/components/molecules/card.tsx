import { Link } from 'react-router-dom';
import MyClassDummyImg from '../../assets/dummy/list-class-card.png'
import OtherMaterialDummyImg from '../../assets/dummy/other-material-card.png'
import OtherMaterialDummyImg2 from '../../assets/dummy/other-material-card2.png'
import BukalapakLogo from '../../assets/dummy/bukalapak-logo.png'
import { HiBolt, HiOutlineTrash, HiStar } from "react-icons/hi2";
import { MouseEvent, useState } from 'react'
import Modal from './modal';

function MyClass() {
    const progressClass = 38
    const [modalDismissed, setModalDismissed] = useState<boolean>(true)

    function showModal(e: MouseEvent) {
        e.stopPropagation()
        e.preventDefault()
        setModalDismissed(false)
    }

    return (
        <>
            <Link to="1/material/main" className='flex flex-col rounded-lg bg-white max-w-1/3 rounded-lg transition-all hover:shadow-2xl'>
                {/* <img src={MyClassDummyImg} alt="" className='object-cover rounded-lg' /> */}
                <div className={`h-48 bg-cover bg-center rounded-lg`} style={{ backgroundImage: `url(${MyClassDummyImg})` }}></div>
                <div className='flex flex-col gap-2 p-6'>
                    <h2 className='font-medium'>Intro to UI/UX Designer</h2>
                    <div className='flex flex-row items-center justify-between gap-3'>
                        <span className='text-sm font-medium'>Aria Dwitolio</span>
                        <div className='flex flex-row gap-2'>
                            <button
                                onClick={showModal}
                                className='bg-flowkit-red hover:bg-red-700 w-7 h-7 flex items-center justify-center rounded-lg text-white text-sm'
                            >
                                <HiOutlineTrash />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        <span className='text-primary-main'><HiBolt /></span>
                        <div className='flex flex-col'>
                            <span className='text-xs text-neutral-70'>Last Update</span>
                            <span className='text-xs'>2 Hour ago</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row items-center justify-between'>
                            <span className='text-xs font-medium text-text-paragraph'>Progress Class</span>
                            <span className='text-xs font-medium text-text-heading'>38%</span>
                        </div>
                        <div className='w-full bg-primary-surface rounded-full h-1.5'>
                            <div className={`bg-primary-main rounded-full h-full`} style={{ width: `${progressClass}%` }}></div>
                        </div>
                    </div>
                </div>
            </Link>
            <Modal
                isDismissed={modalDismissed}
                setIsDismissed={setModalDismissed}
                type="danger"
                title="Delete class"
                body="Are you sure you want to delete this class?"
                confirmBtnText="Delete"
                cancelBtnText="Cancel"
            />
        </>
    )
}

function OtherMaterial() {
    return (
        <div className='border rounded-lg bg-white p-4 flex flex-row items-stretch gap-3'>
            <div className='rounded-lg h-full aspect-square'>
                <img src={OtherMaterialDummyImg} alt="" className='rounded-lg object-cover' />
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='font-bold text-sm text-neutral-100'>Belajar Html Css  yang cepat dan </h3>
                <span className='text-xs text-neutral-90'>Pelita Nur Najmina</span>
                <div className='flex flex-row items-center gap-1'>
                    <span className='font-medium text-xs text-secondary-hover'>4,8</span>
                    <div className='flex flex-row items-center'>
                        <HiStar className="text-secondary-main" />
                        <HiStar className="text-secondary-main" />
                        <HiStar className="text-secondary-main" />
                        <HiStar className="text-secondary-main" />
                        <HiStar className="text-neutral-40" />
                    </div>
                    <span className='text-xs text-neutral-60'>(100+)</span>
                </div>
            </div>
        </div>
    )
}

function OtherMaterial2() {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'

    return (
        <div className='rounded bg-cover bg-center w-full aspect-square' style={{ backgroundImage: `url(${OtherMaterialDummyImg2})` }}>
            <div className='bg-gradient-to-t from-black to-transparent w-full h-full rounded'>
                <div className='flex flex-col justify-end gap-2 text-white h-full w-full p-4'>
                    <span className='font-black text-sm'>Mobile User Interface Design</span>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={dummyPhoto} alt="" className="w-12 h-12 object-cover rounded-full" />
                        <div className='flex flex-col'>
                            <span className='font-semibold text-xs'>By Mark Zukerberg</span>
                            <div className='flex flex-row items-center gap-1'>
                                <img src={BukalapakLogo} alt="" className="w-4 h-4 object-cover rounded-full" />
                                <div className='flex flex-col'>
                                    <span className='font-semibold text-[7px]'>Programmer</span>
                                    <span className='font-medium text-[6px] text-text-paragraph'>Bukalapak</span>
                                </div>
                            </div>
                            <div className='flex flex-row gap-1 items-center'>
                                <div className='flex flex-row items-center text-xs'>
                                    <HiStar className="text-secondary-main" />
                                    <HiStar className="text-secondary-main" />
                                    <HiStar className="text-secondary-main" />
                                    <HiStar className="text-secondary-main" />
                                    <HiStar className="text-white" />
                                </div>
                                <span className='text-[8px] font-medium mt-1'>4.0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = {
    MyClass, OtherMaterial, OtherMaterial2
}

export default Card