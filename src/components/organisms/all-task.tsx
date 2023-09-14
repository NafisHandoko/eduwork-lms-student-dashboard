import { HiChevronRight, HiChevronUpDown, HiOutlineClock, HiOutlineEye, HiOutlineLockClosed, HiXMark } from "react-icons/hi2"
import { TBody, TColumn, THeader, TRow, Table } from "../molecules/table"
import Button from "../atoms/button"

function AllTaskTable() {
    return (
        <Table>
            <THeader>
                <TColumn>
                    <div className="flex flex-row items-center justify-between gap-2">
                        <span>Kurikulum</span>
                        <button><HiChevronUpDown /></button>
                    </div>
                </TColumn>
                <TColumn>
                    <div className="flex flex-row items-center justify-between gap-2">
                        <span>Judul Tugas</span>
                        <button><HiChevronUpDown /></button>
                    </div>
                </TColumn>
                <TColumn>Status</TColumn>
                <TColumn>Action</TColumn>
            </THeader>
            <TBody>
                <TRow>
                    <TColumn>Introduction</TColumn>
                    <TColumn>Ringkasan tentang Digital Marketing</TColumn>
                    <TColumn>
                        <div className="flex flex-row items-center justify-center gap-2 text-[#838383]">
                            <HiOutlineLockClosed />
                            <span>locked</span>
                        </div>
                    </TColumn>
                    <TColumn>
                        <div className="flex flex-row items-center justify-center gap-1 text-white bg-[#949494] rounded-lg px-3 py-1">
                            <HiOutlineLockClosed />
                            <span className="mr-2">locked</span>
                            <HiChevronRight />
                        </div>
                    </TColumn>
                </TRow>
                <TRow>
                    <TColumn>Market Research</TColumn>
                    <TColumn>Buatlah Ringkasan Fundamental Marketing</TColumn>
                    <TColumn>
                        <div className="flex flex-row items-center justify-center gap-1 bg-[#F0FFB2] rounded-full px-3 py-1">
                            <HiOutlineClock />
                            <span className="whitespace-nowrap">Sedang diperiksa</span>
                        </div>
                    </TColumn>
                    <TColumn>
                        <div className="flex flex-row items-center justify-center gap-1 text-white bg-[#949494] rounded-lg px-3 py-1">
                            <HiOutlineLockClosed />
                            <span className="mr-2">locked</span>
                            <HiChevronRight />
                        </div>
                    </TColumn>
                </TRow>
                <TRow>
                    <TColumn>Market Research</TColumn>
                    <TColumn>Buatlah Ringkasan Cara Penggunaan Google Trends</TColumn>
                    <TColumn>
                        <div className="flex flex-row items-center justify-center gap-1 bg-[#FFE2E2] rounded-full px-3 py-1">
                            <HiXMark />
                            <span className="whitespace-nowrap">Belum dikerjakan</span>
                        </div>
                    </TColumn>
                    <TColumn>
                        <div className="flex flex-row items-center justify-center gap-1 text-white bg-primary-main rounded-lg px-3 py-1">
                            <HiOutlineEye />
                            <span className="mr-2">lihat</span>
                            <HiChevronRight />
                        </div>
                    </TColumn>
                </TRow>
            </TBody>
        </Table>
    )
}

export default function ClassAllTask() {
    return (
        <div className="flex flex-col px-7 gap-7 py-3">
            <div className="flex flex-row items-center justify-between">
                <h1 className="font-bold text-2xl">Intro Menjadi Digital Marketing</h1>
                <Button text="Show All" type="success" />
            </div>
            <AllTaskTable />
        </div>
    )
}
