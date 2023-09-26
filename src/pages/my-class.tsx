import StudentTemplate from '../components/templates/student-template'
import MyClassActionPanel from '../components/molecules/my-class/action-panel'
import Card from '../components/molecules/card';
import { useGetAllClassesQuery } from '../api/classApi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect } from 'react';
import { setClassState } from '../store/classSlice';

export default function MyClass() {
    const { isLoading, isError, error, data: fetchedClassData } = useGetAllClassesQuery()
    const dispatch = useDispatch();
    const classData = useSelector((state: RootState) => state.classState.class)

    useEffect(() => {
        if (fetchedClassData) {
            dispatch(setClassState(fetchedClassData.data.class));
        }
    }, [fetchedClassData, dispatch]);

    return (
        <StudentTemplate.Default title="My Class">
            {/* main content */}
            <div className='flex flex-col gap-5 p-5 bg-primary-surface h-full min-h-screen'>
                <MyClassActionPanel />
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3'>
                    {/* card */}
                    {(classData && classData.length > 0) && classData.map((kelas: any) => (
                        <Card.MyClass key={kelas.id} classData={kelas} />
                    ))}
                </div>
            </div>
        </StudentTemplate.Default>
    )
}
