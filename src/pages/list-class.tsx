import { useState } from 'react'
import StudentTemplate from '../components/templates/student-template'
import ListClassActionPanel from '../components/molecules/list-class/action-panel'

export default function ListClass() {
    const [isExpand, setIsExpand] = useState(true)

    return (
        <StudentTemplate isExpand={isExpand}>
            {/* topbar */}
            <div className="py-3 px-4 bg-white flex flex-row gap-4">
                <button onClick={() => setIsExpand(!isExpand)}><i className="bi bi-list text-xl font-bold"></i></button>
                <h1 className="text-xl font-bold">List Community</h1>
            </div>

            {/* main content */}
            <div className='flex flex-col gap-3 p-3'>
                <ListClassActionPanel />
                <div>tes</div>
            </div>
        </StudentTemplate>
    )
}
