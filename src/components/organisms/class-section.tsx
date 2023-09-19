import Collapse from "../molecules/collapse";

export default function ClassSection() {
    return (
        <>
            <div className="bg-[#D1E3FF] p-4 sticky top-[70px] z-10">
                <h2 className="text-2xl font-bold">SECTION</h2>
            </div>
            <div className="flex flex-col w-full">
                <Collapse status="finished" />
                <Collapse status="ongoing" />
                <Collapse status="locked" />
            </div>
        </>
    )
}
