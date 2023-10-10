import { Link } from 'react-router-dom';
import MyClassDummyImg from '../../assets/dummy/list-class-card.png'
import OtherMaterialDummyImg from '../../assets/dummy/other-material-card.png'
import OtherMaterialDummyImg2 from '../../assets/dummy/other-material-card2.png'
import BukalapakLogo from '../../assets/dummy/bukalapak-logo.png'
import { HiBolt, HiInformationCircle, HiOutlineInformationCircle, HiOutlineTrash, HiStar } from "react-icons/hi2";
import { MouseEvent, useState } from 'react'
import Modal from './modal';
import { isoStringToDate, profilePhoto } from '@/src/utils/helper';
import { ClassType, OtherMaterialType } from '@/src/store/types/ClassTypes';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/store';
import { getRegistrantAll, getRegistrantByClassId } from '@/src/store/registrantSlice';
import Skeleton from './skeleton';

function MyClass({ classData }: {classData: ClassType}) {
    const progressClass = 38
    const [modalDismissed, setModalDismissed] = useState<boolean>(true)
    const registrant = useSelector((state: RootState) => getRegistrantByClassId(state,classData.id))

    function showModal(e: MouseEvent) {
        e.stopPropagation()
        e.preventDefault()
        setModalDismissed(false)
    }

    return (
        <>
            <Link to={`${classData.id}/material/task`} className='flex flex-col rounded-lg bg-white max-w-1/3 rounded-lg transition-all hover:shadow-2xl'>
                {/* <img src={MyClassDummyImg} alt="" className='object-cover rounded-lg' /> */}
                <div className={`h-48 bg-cover bg-center rounded-lg`} style={{ backgroundImage: `url(${MyClassDummyImg})` }}></div>
                <div className='flex flex-col gap-2 p-6'>
                    <h2 className='font-medium'>{classData.title}</h2>
                    <div className='flex flex-row items-center justify-between gap-3'>
                        <span className='text-sm font-medium'>{classData.mentor.name}</span>
                        <div className='flex flex-row gap-2'>
                            {/* <button
                                onClick={showModal}
                                className='bg-flowkit-red hover:bg-red-700 w-7 h-7 flex items-center justify-center rounded-lg text-white text-sm'
                            >
                                <HiOutlineTrash />
                            </button> */}
                            <HiOutlineInformationCircle className='w-7 h-7' />
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-1 space-x-3'>
                        <span className='text-primary-main'><HiBolt /></span>
                        {
                            registrant?.start_class_at ?
                            <>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-neutral-70'>Last Update</span>
                                    <span className='text-xs'>{moment(registrant?.updated_at).fromNow()}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-neutral-70'>Start At</span>
                                    <span className='text-xs'>{moment(registrant?.start_class_at).fromNow()}</span>
                                </div>
                            </>:
                            <div>Belum Mulai Kelas</div>
                        }
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row items-center justify-between'>
                            <span className='text-xs font-medium text-text-paragraph'>Progress Class</span>
                            <span className='text-xs font-medium text-text-heading'>{registrant?.progress}%</span>
                        </div>
                        <div className='w-full bg-primary-surface rounded-full h-1.5 relative'>
                            <div className={`bg-red-700 rounded-full h-full absolute top-0 left-0 z-10`} style={{ width: `${registrant?.progress}%` }}></div>
                            <div className={`bg-primary-main rounded-full h-full z-20 relative`} style={{ width: `${registrant?.mentor_progress}%` }}></div>
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

export function OtherMaterialLoading() {

    return (
        <div className='rounded bg-cover bg-center w-full aspect-square relative'>
            <Skeleton className='w-full h-full absolute top-0 left-0 bg-slate-100' />
            <div className='bg-gradient-to-t from-black to-transparent w-full h-full rounded'>
                <div className='flex flex-col justify-end gap-2 text-white h-full w-full p-4'>
                    <span className='font-black text-sm'><Skeleton className='h-[40px] rounded-lg' /></span>
                    <div className='flex flex-row items-center gap-2'>
                        <Skeleton className='h-12 w-12 rounded-full' />
                        {/* <img src={dummyPhoto} alt="" className="w-12 h-12 object-cover rounded-full" /> */}
                        <div className='flex flex-col'>
                            <span className='font-semibold text-xs'><Skeleton className='h-[16px] w-full rounded-lg' /></span>
                            <div className='flex flex-row items-center gap-1'>
                                {/* <img src={BukalapakLogo} alt="" className="w-4 h-4 object-cover rounded-full" /> */}
                                <Skeleton className='h-[9px] w-[9px] rounded-full' />

                                <div className='flex flex-col'>
                                    <Skeleton className='h-[19px] w-full' />
                                    {/* <span className='font-semibold text-[7px]'>Programmer</span>
                                    <span className='font-medium text-[6px] text-text-paragraph'>Bukalapak</span> */}
                                </div>
                            </div>
                            <div className='flex flex-row gap-1 items-center'>
                                <div className='flex flex-row items-center text-xs space-x-1'>
                                    <Skeleton className='h-[9px] w-[9px] rounded-full' />
                                    <Skeleton className='h-[9px] w-[9px] rounded-full' />
                                    <Skeleton className='h-[9px] w-[9px] rounded-full' />
                                    <Skeleton className='h-[9px] w-[9px] rounded-full' />
                                    <Skeleton className='h-[9px] w-[9px] rounded-full' />
                                    {/* <HiStar className="text-secondary-main" />
                                    <HiStar className="text-secondary-main" />
                                    <HiStar className="text-secondary-main" />
                                    <HiStar className="text-secondary-main" />
                                    <HiStar className="text-white" /> */}
                                </div>
                                <span className='text-[8px] font-medium'>
                                    <Skeleton className='h-[9px] w-[15px] rounded-full' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function OtherMaterial2({material}:{material: OtherMaterialType}) {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'

    return (
        <div className='rounded bg-cover bg-center w-full aspect-square relative'>
            {
                material.content &&
                <iframe src={material.content} className='w-full h-full absolute top-0 left-0 z-10 rounded'></iframe>
            }
            <div className='bg-gradient-to-t from-black to-transparent w-full h-full rounded'>
                <div className='flex flex-col justify-end gap-2 text-white h-full w-full'>
                    {/* <span className='font-black text-sm'>Mobile User Interface Design</span> */}
                    <div className='flex flex-row items-center gap-2 z-20 p-4 bg-slate-600 rounded-b'>
                        <img src={profilePhoto(material.mentor)} alt="" className="w-12 h-12 object-cover rounded-full" />
                        <div className='flex flex-col'>
                            <span className='font-semibold text-xs'>{material.mentor.name}</span>
                            <div className='flex flex-row items-center gap-1'>
                                {/* <img src={BukalapakLogo} alt="" className="w-4 h-4 object-cover rounded-full" /> */}
                                <div className='flex flex-col'>
                                    <span className='font-semibold text-[7px]'>{material.mentor.profesi}</span>
                                    <span className='font-medium text-[6px] text-text-paragraph text-white'>{material.mentor.working_on}</span>
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
    MyClass, OtherMaterial, OtherMaterial2, OtherMaterialLoading
}

export default Card