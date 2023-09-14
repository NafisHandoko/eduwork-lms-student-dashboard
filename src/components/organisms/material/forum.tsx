import { HiMagnifyingGlass, HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import Input from "../../atoms/input";
import { useState } from 'react'

function ForumCard() {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'

    return (
        <div className="flex flex-col p-5 border border-neutral-60 bg-[#FAFAFA] rounded-lg gap-2">
            <div className="flex flex-row items-center">
                <img src={dummyPhoto} alt="" className="w-7 h-7 object-cover rounded-full mr-3" />
                <span>Krisna Dwikurnia</span>
                <span className="text-neutral-90 text-sm ml-4">・ 1 Jam yang lalu</span>
            </div>
            <h3>Silahkan dibaca sebelum Membuat Diskusi Baru atau Menjawab Diskusi</h3>
            <p className="text-sm text-neutral-90">Membuat Diskusi Baru untuk mempermudah dalam membantu permasalah pada proses pembelajaran Anda..</p>
            <div className="flex flex-row items-center gap-2 text-neutral-90">
                <HiOutlineChatBubbleLeftEllipsis />
                <span className="text-sm">177 Pembahasan</span>
            </div>
        </div>
    )
}

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
                <div className="flex flex-col gap-5">
                    <ForumCard />
                    <ForumCard />
                    <ForumCard />
                </div>
            </div>
        </div>
    )
}
