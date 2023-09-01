import CardDummyImg from '../../assets/dummy/list-class-card.png'
import { HiBolt, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";

export default function ClassCard() {
  const progressClass = 38

  return (
    <div className='flex flex-col rounded-lg bg-white max-w-1/3 rounded-lg'>
      {/* <img src={CardDummyImg} alt="" className='object-cover rounded-lg' /> */}
      <div className={`h-48 bg-cover bg-center rounded-lg`} style={{ backgroundImage: `url(${CardDummyImg})` }}></div>
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
    </div>
  )
}
