import { Link } from 'react-router-dom';
import MyClassDummyImg from '../../assets/dummy/list-class-card.png'
import OtherMaterialDummyImg from '../../assets/dummy/other-material-card.png'
import { HiBolt, HiOutlinePencil, HiOutlineTrash, HiStar } from "react-icons/hi2";

function MyClass() {
  const progressClass = 38

  return (
    <Link to="1/material/main" className='flex flex-col rounded-lg bg-white max-w-1/3 rounded-lg'>
      {/* <img src={MyClassDummyImg} alt="" className='object-cover rounded-lg' /> */}
      <div className={`h-48 bg-cover bg-center rounded-lg`} style={{ backgroundImage: `url(${MyClassDummyImg})` }}></div>
      <div className='flex flex-col gap-2 p-6'>
        <h2 className='font-medium'>Intro to UI/UX Designer</h2>
        <div className='flex flex-row items-center justify-between gap-3'>
          <span className='text-sm font-medium'>Aria Dwitolio</span>
          <div className='flex flex-row gap-2'>
            <button className='bg-primary-main w-7 h-7 flex items-center justify-center rounded-lg text-white text-sm'><HiOutlinePencil /></button>
            <button className='bg-flowkit-red w-7 h-7 flex items-center justify-center rounded-lg text-white text-sm'><HiOutlineTrash /></button>
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
  )
}

function OtherMaterial() {
  return (
    <div className='border rounded-lg bg-white max-w-1/3 p-4 flex flex-row items-stretch gap-3'>
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

const Card = {
  MyClass, OtherMaterial
}

export default Card