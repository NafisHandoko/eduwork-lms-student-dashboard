import { HiMagnifyingGlass } from "react-icons/hi2";
import Input from "../../atoms/input";
import { useState } from 'react'

export default function Forum() {
    const [serachForum, setSearchForum] = useState('')
    const [selectMaterial, setSelectMaterial] = useState('')

    return (
        <div className="flex flex-row px-7 items-stretch gap-10">
            <div className="flex flex-col gap-5">
                <button className="bg-primary-main text-white rounded-lg px-5 py-2 whitespace-nowrap">Buat diskusi baru</button>
                <div className="flex flex-col gap-3 border border-neutral-60 rounded-lg p-5 text-center">
                    <span>Filter Forum</span>
                    <div className="flex flex-row items-center gap-2 text-text-heading">
                        <input type="checkbox" />
                        <span>Terbaru</span>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-text-heading">
                        <input type="checkbox" />
                        <span>Terlama</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-row gap-5">
                    <Input
                        placeholder="Search Forum Diskusi"
                        prefixIcon={<HiMagnifyingGlass className="text-neutral-60" />}
                        value={serachForum}
                        onChange={(e: any) => setSearchForum(e.target.value)}
                    />
                    <Input
                        placeholder="Pilih Materi"
                        value={selectMaterial}
                        onChange={(e: any) => setSelectMaterial(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}
