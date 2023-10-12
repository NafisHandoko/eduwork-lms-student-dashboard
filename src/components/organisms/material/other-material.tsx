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

    // Define the number of items to display per page
    const itemsPerPage = 6;

    // Define the current page (e.g., as a state variable in your React component)
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the starting index of the current page
    const startIndex = (currentPage - 1) * itemsPerPage;

    // Slice the array to get the items for the current page
    const fullTextSearch = (searchTerm: string, against: Array<any>) => {
        if (searchTerm == '') {
            return against
        }
        const searchKeywords = searchTerm.split(' '); // Split search term into individual keywords
        const searchPatterns = searchKeywords.map((keyword) => new RegExp(keyword, 'i'));
      
        return against.filter((item) => {
          // Check if at least one keyword is found in the title
          return searchPatterns.some((pattern) => {
            return (
              pattern.test(item.title || '') ||
              pattern.test(item.content || '') ||
              pattern.test(item.type || '') ||
              pattern.test(item.mentor.name || '') ||
              pattern.test(item.mentor.phone || '') ||
              pattern.test(item.mentor.email || '') ||
              pattern.test(item.mentor.working_on || '')
            );
          });
        });
    };

    const itemsOnCurrentPage = fullTextSearch(search ?? null, otherMaterialCards).slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
        if (activeCurriculum && otherMaterialCards.length == 0) {
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
                    {/* <div className="flex flex-row gap-3 items-stretch text-[0.8rem]">
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
                    </div> */}
                </div>
                <form onSubmit={() => { }} className="relative md:w-full">
                    {/* <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i className="bi bi-search text-neutral-60"></i></div> */}
                    {/* <button type='button' onClick={() => { }} className="flex absolute inset-y-0 left-0 items-center pl-5 cursor-pointer">
                                <i className="bi bi-emoji-smile text-relazee-blue"></i>
                            </button> */}
                    <input
                        value={search}
                        onChange={(e) => {
                            setCurrentPage(1)
                            setSearch(e.target.value)
                        }}
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
                    <>
                        {
                            (itemsOnCurrentPage && itemsOnCurrentPage.length > 0) && itemsOnCurrentPage.map((material) => (
                                <Card.OtherMaterial2 key={material.id} material={material} />
                            ))
                        } 
                    </>
                }
            </div>
            {
                !loading &&
                <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                        <a
                        href="#"
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                        Previous
                        </a>
                        <a
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover-bg-gray-50"
                        >
                        Next
                        </a>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        {/* Render pagination links based on the total number of items */}
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        {/* Render pagination links dynamically */}
                        {Array.from({ length: Math.ceil(fullTextSearch(search ?? null, otherMaterialCards).length / itemsPerPage) }).map((_, index) => (
                            <a
                            key={index}
                            href="#"
                            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                                currentPage === index + 1
                                ? 'bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover-bg-gray-50 focus:z-20 focus:outline-offset-0'
                            }`}
                            onClick={() => setCurrentPage(index + 1)}
                            >
                            {index + 1}
                            </a>
                        ))}
                        </nav>
                    </div>
                </div> 
            }
        </div>
    )
}

export function OtherMaterial2() {
    return (
        <div className="flex flex-col px-7"></div>
    )
}