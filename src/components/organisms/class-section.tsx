import Collapse from "../molecules/collapse";

export default function ClassSection() {
    return (
        <>
            <div className="bg-[#D1E3FF] p-4">
                <h2 className="text-2xl font-bold">SECTION</h2>
            </div>
            <div className="flex flex-col w-full">
                <Collapse />
                <Collapse />
            </div>
        </>
    )
}