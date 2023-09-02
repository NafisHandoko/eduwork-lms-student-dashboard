const Default = function ({ isExpand, setIsExpand, title }: any) {
    return (
        <div className="py-3 px-4 bg-white flex flex-row gap-4">
            <button onClick={() => setIsExpand(!isExpand)}><i className="bi bi-list text-xl font-bold"></i></button>
            <h1 className="text-xl font-bold">{title}</h1>
        </div>
    )
}

const ClassChapter = function ({ isExpand, setIsExpand }: any) {
    return (
        <div className="py-3 px-4 bg-white flex flex-row gap-4">
            <button onClick={() => setIsExpand(!isExpand)}><i className="bi bi-list text-xl font-bold"></i></button>
            <select>
                <option value="0">Kelas Digital Marketing</option>
            </select>
        </div>
    )
}

const Topbar = {
    Default
}

export default Topbar