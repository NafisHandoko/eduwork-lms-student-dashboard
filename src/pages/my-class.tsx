import { useState } from 'react'
import StudentTemplate from '../components/templates/student-template'
import MyClassActionPanel from '../components/molecules/my-class/action-panel'
import CardDummyImg from '../assets/dummy/list-class-card.png'
import ClassCard from '../components/molecules/class-card';

export default function MyClass() {
    const [isExpand, setIsExpand] = useState(true)
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
        <StudentTemplate isExpand={isExpand}>
            {/* topbar */}
            <div className="py-3 px-4 bg-white flex flex-row gap-4">
                <button onClick={() => setIsExpand(!isExpand)}><i className="bi bi-list text-xl font-bold"></i></button>
                <h1 className="text-xl font-bold">List Community</h1>
            </div>

            {/* main content */}
            <div className='flex flex-col gap-5 p-5'>
                <MyClassActionPanel />
                <div className='grid grid-cols-3 gap-3'>

                    {/* card */}
                    {(classCards && classCards.length>0) && classCards.map((kelas, i) => (
                        <ClassCard />
                    ))}
                    <ClassCard />
                </div>
            </div>
        </StudentTemplate>
    )
}
