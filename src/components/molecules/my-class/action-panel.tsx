import { useState } from 'react'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import { HiMagnifyingGlass } from 'react-icons/hi2'

export default function MyClassActionPanel() {
    const [search, setSearch] = useState('')

    return (
        <div className='flex flex-row gap-3 justify-between items-stretch'>
            <Button text="Add Class" />
            <Input
                prefixIcon={<HiMagnifyingGlass className="text-neutral-60" />}
                placeholder="Search class"
                value={search}
                onChange={(e: any) => setSearch(e.target.value)}
            />
            <div className='flex flex-row items-center gap-2 bg-white border border-primary-main px-4 text-primary-main rounded-full whitespace-nowrap'>
                <input type="checkbox" name="last-update" id="last-update" />
                <span>Last Update</span>
            </div>
            <button className='flex flex-row items-center gap-2 bg-white border border-primary-main px-4 text-primary-main rounded-full whitespace-nowrap'>
                <span>Filter</span>
                <i className="bi bi-filter"></i>
            </button>
        </div>
    )
}
