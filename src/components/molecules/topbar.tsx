const Default = function ({ isExpand, setIsExpand, title }: any) {
    return (
        <div className="h-[70px] px-4 bg-white flex flex-row gap-4 items-center">
            <button onClick={() => setIsExpand(!isExpand)}><i className="bi bi-list text-xl font-bold"></i></button>
            <h1 className="text-xl font-bold">{title}</h1>
        </div>
    )
}

const ClassChapter = function ({ isExpand, setIsExpand }: any) {
    return (
        <div className="h-[70px] px-4 bg-white flex flex-row gap-4 items-center">
            <button onClick={() => setIsExpand(!isExpand)}><i className="bi bi-list text-xl font-bold"></i></button>
            <select className="rounded-full border border-primary-main text-primary-main px-4 py-1.5">
                <option value="0">Kelas Digital Marketing</option>
                <option value="1">Kelas UI/UX Design</option>
            </select>
            <div className="flex flex-row h-full gap-2">
                <div className="border-4 border-transparent border-b-primary-main text-primary-main flex items-center justify-center px-2">Material</div>
                <div className="border-4 border-transparent text-neutral-70 flex items-center justify-center px-2">All Task</div>
            </div>
        </div>
    )
}

const Topbar = {
    Default, ClassChapter
}

export default Topbar