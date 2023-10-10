import { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Card, { OtherMaterialLoading } from "../../molecules/card";
import Dropdown from "../../atoms/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/src/store";
import { fetchOtherMaterialApi } from "@/src/api/classApi";
import { useParams } from "react-router-dom";
import { classActiveCurriculum, classLoading, classOtherMaterialAll } from "@/src/store/classSlice";
import { createId } from "@/src/utils/helper";

export function OtherMaterial() {
    const dispatch: AppDispatch = useDispatch();
    const {classId} = useParams()
    const loading = useSelector(classLoading).includes("fetch_other_material")
    const activeCurriculum = useSelector(classActiveCurriculum)
    const [search, setSearch] = useState('')
    const otherMaterialCards = useSelector(classOtherMaterialAll)

    useEffect(() => {
        if (activeCurriculum) {
            dispatch(fetchOtherMaterialApi({
                payload: {
                    class_id: classId as unknown as number,
                    curriculum_id: activeCurriculum as unknown as number ?? 0
                }
            }))
        }
    }, [activeCurriculum])

    return (
        <div className="flex flex-col px-7 gap-10">
            <div className="flex flex-col gap-5">
                <div className="flex flex-row items-center justify-between gap-2">
                    <h1 className="font-bold text-lg">Referensi Video Materi Lainya.. </h1>
                    <div className="flex flex-row gap-3 items-stretch text-[0.8rem]">
                        <Dropdown>
                            <option value="0">Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Dropdown>
                        <Dropdown>
                            <option value="0">Terbaru</option>
                            <option value="1">Populer</option>
                        </Dropdown>
                        <button className='flex flex-row items-center gap-2 bg-white border border-primary-main px-4 text-primary-main rounded-full whitespace-nowrap'>
                            <span>Filter</span>
                            <i className="bi bi-filter"></i>
                        </button>
                    </div>
                </div>
                <form onSubmit={() => { }} className="relative md:w-full">
                    {/* <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i className="bi bi-search text-neutral-60"></i></div> */}
                    {/* <button type='button' onClick={() => { }} className="flex absolute inset-y-0 left-0 items-center pl-5 cursor-pointer">
                                <i className="bi bi-emoji-smile text-relazee-blue"></i>
                            </button> */}
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        id="simple-search"
                        className="bg-white shadow-lg text-sm rounded-xl block w-full p-4 placeholder-neutral-60"
                        placeholder="Ketik judul materi yang ingin kamu cari.. "
                    />
                    <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                        {/* <i className="bi bi-send-fill text-relazee-blue"></i> */}
                        <div className="w-7 h-7 flex items-center justify-center bg-primary-main rounded-full text-white"><HiMagnifyingGlass /></div>
                    </button>
                </form>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                {/* card */}
                {
                    loading &&
                    createId(6).map(item => (
                        <OtherMaterialLoading  key={item.id}/>
                    ))
                }
                {
                    !loading &&
                    (otherMaterialCards && otherMaterialCards.length > 0) && otherMaterialCards.map((material) => (
                        <Card.OtherMaterial2 key={material.id} material={material} />
                    ))
                }
            </div>
        </div>
    )
}

export function OtherMaterial2() {
    return (
        <div className="flex flex-col px-7"></div>
    )
}