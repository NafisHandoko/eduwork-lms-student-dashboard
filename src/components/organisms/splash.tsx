import { useEffect, useState } from 'react'
import SplashImg from '../../assets/splash.png'
import { motion } from "framer-motion"

export default function Splash() {
    const [progress, setProgress] = useState(0)
    const [isDisplayed, setIsDisplayed] = useState(true)

    useEffect(() => {
        if (progress >= 0 && progress < 100) {
            setTimeout(() => setProgress(progress + 1), 15)
        } else if (progress >= 100) {
            setIsDisplayed(false)
        }
    }, [progress])

    return (
        <div className={`bg-white items-center justify-center h-screen ${isDisplayed ? 'flex' : 'hidden'}`}>
            <div className="bg-white rounded-xl shadow-xl flex flex-col">
                <div className="bg-center bg-cover rounded-t-2xl w-full h-32" style={{ backgroundImage: `url(${SplashImg})` }}></div>
                <div className='flex flex-col text-center px-10 py-7 gap-3'>
                    <span className='text-neutral-90 font-medium text-2xl'>Please Wait</span>
                    <span className='text-neutral-70 text-lg'>We've loaded {progress}% of your data</span>
                    <div className='w-full bg-primary-surface rounded-full h-1.5'>
                        {/* <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3 }}
                            className={`bg-primary-main rounded-full h-full`} style={{ width: `${progress}%` }}
                        /> */}
                        <div className={`bg-primary-main rounded-full h-full transition-all`} style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
