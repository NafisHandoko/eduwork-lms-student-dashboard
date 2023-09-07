import StudentTemplate from '../components/templates/student-template'
import MyClassActionPanel from '../components/molecules/my-class/action-panel'
import Card from '../components/molecules/card';

export default function MyClass({ isExpand, setIsExpand }: any) {
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
        <StudentTemplate.Default title="My Class" isExpand={isExpand} setIsExpand={setIsExpand} >
            {/* main content */}
            <div className='flex flex-col gap-5 p-5 bg-primary-surface'>
                <MyClassActionPanel />
                <div className='grid grid-cols-3 gap-3'>
                    {/* card */}
                    {(classCards && classCards.length > 0) && classCards.map((kelas, i) => (
                        <Card.MyClass />
                    ))}
                </div>
            </div>
        </StudentTemplate.Default>
    )
}
