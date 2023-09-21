import Error404Img from '../assets/error_404.gif'
import StudentTemplate from '../components/templates/student-template'

export default function Error404() {
    return (
        <StudentTemplate.Default>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <img src={Error404Img} alt="" />
                <h1 className='text-primary-main font-black text-3xl -mt-10 tracking-widest'>NOT FOUND</h1>
            </div>
        </StudentTemplate.Default>
    )
}
