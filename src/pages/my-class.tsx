import StudentTemplate from '../components/templates/student-template'
import MyClassActionPanel from '../components/molecules/my-class/action-panel'
import CardDummyImg from '../assets/dummy/list-class-card.png'
import ClassCard from '../components/molecules/class-card';

export default function MyClass() {
    const progressClass = 38

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
        <StudentTemplate.Default title="My Class" >
            {/* main content */}
            <div className='flex flex-col gap-5 p-5 bg-primary-surface'>
                <MyClassActionPanel />
                <div className='grid grid-cols-3 gap-3'>

                    {/* card */}
                    {(classCards && classCards.length>0) && classCards.map((kelas, i) => (
                        <ClassCard />
                    ))}
                    <ClassCard />
                </div>
            </div>
        </StudentTemplate.Default>
    )
}
