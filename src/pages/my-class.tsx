import StudentTemplate from '../components/templates/student-template'
import MyClassActionPanel from '../components/molecules/my-class/action-panel'
import Card from '../components/molecules/card';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { getAuthUser } from '../store/authSlice';
import Skeleton from '../components/loader/skeleton';
import { createId } from '../utils/helper';

export default function MyClass() {
    const classData = useSelector((state: RootState) => state.classState.class)
    const user = useSelector(getAuthUser)
    return (
        <StudentTemplate.Default title="My Class">
            {/* main content */}
            <div className='flex flex-col gap-5 p-5 bg-primary-surface h-full min-h-screen'>
                <MyClassActionPanel />
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3'>
                    {/* card */}
                    {/* {
                        createId(6).map(item => (
                            <a
                                key={item.id}
                                className="flex flex-col rounded-lg bg-white max-w-1/3 rounded-lg shadow"
                                >
                                <Skeleton
                                    className="h-48 w-full rounded-t-lg"
                                />
                                <div className="flex flex-col gap-2 p-6">
                                    <h2 className="font-medium"><Skeleton className="h-4 rounded-full w-full" /></h2>
                                    <div className="flex flex-row items-center justify-between gap-3">
                                    <span className="text-sm font-medium w-full"><Skeleton className="h-4 rounded-full w-full" /></span>
                                    <div className="flex flex-row gap-2">
                                        <Skeleton className="w-7 h-7 rounded-lg" />
                                        <Skeleton className="w-7 h-7 rounded-lg" />
                                    </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                    <div className="flex flex-row items-center justify-between space-x-2">
                                        <span className="text-xs font-medium text-text-heading w-full"><Skeleton className="h-4 rounded-full w-full" /></span>
                                    </div>
                                    <div className="w-full bg-primary-surface rounded-full h-1.5">
                                        <Skeleton className="h-4 rounded-full w-full" />
                                    </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    } */}
                    {(classData && classData.length > 0) && classData.map((kelas: any) => (
                        <Card.MyClass key={kelas.id} classData={kelas} />
                    ))}                    
                </div>
            </div>
        </StudentTemplate.Default>
    )
}
