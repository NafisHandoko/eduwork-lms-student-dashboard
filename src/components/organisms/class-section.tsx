import Collapse from "../molecules/collapse";

export default function ClassSection() {
    return (
        <>
            <div className="bg-[#D1E3FF] h-[60px] sticky top-[70px] z-10 flex items-center px-4">
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
