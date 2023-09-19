import StudentTemplate from '../components/templates/student-template'
import MyClassActionPanel from '../components/molecules/my-class/action-panel'
import Card from '../components/molecules/card';

export default function MyClass() {
    const dummyCards = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
    ]
    const classCards = dummyCards

    return (
        <StudentTemplate.Default title="My Class">
            {/* main content */}
            <div className='flex flex-col gap-5 p-5 bg-primary-surface h-full min-h-screen'>
                <MyClassActionPanel />
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3'>
                    {/* card */}
                    {(classCards && classCards.length > 0) && classCards.map((kelas) => (
                        <Card.MyClass key={kelas.id} />
                    ))}
                </div>
            </div>
        </StudentTemplate.Default>
    )
}
