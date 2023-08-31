import { useState } from 'react'
import StudentTemplate from '../components/templates/student-template'

export default function ListClass() {
    const [isExpand, setIsExpand] = useState(true)
    const [search, setSearch] = useState('')

    return (
        <StudentTemplate isExpand={isExpand}>
            {/* topbar */}
            <div className="py-3 px-4 bg-white flex flex-row gap-4">
                <button onClick={() => setIsExpand(!isExpand)}><i className="bi bi-list text-xl font-bold"></i></button>
                <h1 className="text-xl font-bold">List Community</h1>
            </div>

            {/* main content */}
            <div className='flex flex-col gap-3 p-3'>
                <div className='flex flex-row gap-3 justify-between items-stretch'>
                    <button className='bg-primary-main rounded-full px-5 py-2 text-white whitespace-nowrap'>Add Class</button>
                    <form onSubmit={() => { }} className="relative md:w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i className="bi bi-search text-neutral-60"></i></div>
                        {/* <button type='button' onClick={() => { }} className="flex absolute inset-y-0 left-0 items-center pl-5 cursor-pointer">
                                <i className="bi bi-emoji-smile text-relazee-blue"></i>
                            </button> */}
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            id="simple-search"
                            className="bg-white border border-neutral-40 text-sm rounded-full block w-full px-14 md:px-12 p-2.5 placeholder-neutral-60"
                            placeholder="Search class"
                        />
                        {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                <i className="bi bi-send-fill text-relazee-blue"></i>
                            </button> */}
                    </form>
                    <div className='flex flex-row items-center gap-2 bg-white border border-primary-main px-4 text-primary-main rounded-full whitespace-nowrap'>
                        <input type="checkbox" name="last-update" id="last-update" />
                        <span>Last Update</span>
                    </div>
                    <div className='flex flex-row items-center gap-2 bg-white border border-primary-main px-4 text-primary-main rounded-full whitespace-nowrap'>
                        <span>Filter</span>
                        <i className="bi bi-filter"></i>
                    </div>
                </div>
            </div>
        </StudentTemplate>
    )
}
