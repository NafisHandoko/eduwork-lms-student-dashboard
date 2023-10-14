import { useEffect, useState } from 'react'
import SplashImg from '../../assets/splash.png'
import { useDispatch, useSelector } from 'react-redux';
import { LoginApi } from '@/src/api/authApi';
import { AppDispatch } from '@/src/store';
import { getLoading, getTotal } from '@/src/store/initSlice';
import { fetchClassApi } from '@/src/api/classApi';

export default function Splash() {
    const [displayPercent,setDisplayPercent] = useState(0)
    const dispatch: AppDispatch = useDispatch()
    const loads = useSelector(getLoading)
    const total = useSelector(getTotal)
    const percentageUnfixed = (((total-(loads.length)) / total) * 100)
    const percentage: number = Number(percentageUnfixed > 0 && percentageUnfixed < 100 ? percentageUnfixed.toFixed(1): percentageUnfixed)

    useEffect(() => {
      let currentPercentage = displayPercent-1;
      const interval = setInterval(() => {
        currentPercentage += 1;
        if (currentPercentage > percentage) {
          clearInterval(interval);
        }
        setDisplayPercent((currentPercentage >= 100 || total == 0) ? 100: currentPercentage);
      }, 200 / percentage);
  
      return () => clearInterval(interval);
    }, [percentage])

    useEffect(() => {
      dispatch(LoginApi({
        payload: {}
      })).then((res) => {
        setTimeout(() => {
          dispatch(fetchClassApi({
            payload: {}
          }))
        }, 200)
      })
    }, [])

    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg space-y-6 shadow-lg pb-4">
        <img src={SplashImg} className='rounded-t-lg' />
        <div className='flex flex-col items-center justify-center space-y-3'>
          <div className='font-bold text-2xl text-gray-700'>Please Wait</div>
          <div className='text-lg text-gray-500'>We’ve loaded {displayPercent}% of your data</div>
        </div>
        <div className='w-[80%] mx-auto relative'>
          <div className='bg-gray-300 rounded-full h-4 z-10'></div>
          <div className={`bg-blue-600 rounded-full h-4 top-0 left-0 transition-width duration-200 z-20 absolute`} style={{width: `${displayPercent}%`}}></div>
        </div>
      </div>
    )
}
