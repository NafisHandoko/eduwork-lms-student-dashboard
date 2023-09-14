import SplashImg from '../../assets/splash.png'

export default function Splash() {
    const progress = 60

    return (
        <div className="bg-white flex items-center justify-center h-screen">
            <div className="bg-white rounded-xl shadow-xl flex flex-col">
                <div className="bg-center bg-cover rounded-t-2xl w-full h-32" style={{ backgroundImage: `url(${SplashImg})` }}></div>
                <div className='flex flex-col text-center px-10 py-7 gap-3'>
                    <span className='text-neutral-90 font-medium text-2xl'>Please Wait</span>
                    <span className='text-neutral-70 text-lg'>We've loaded 60% of your data</span>
                    <div className='w-full bg-primary-surface rounded-full h-1.5'>
                        <div className={`bg-primary-main rounded-full h-full`} style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
