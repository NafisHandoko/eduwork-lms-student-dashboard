import { HiChevronRight, HiChevronUpDown, HiOutlineClock, HiOutlineEye, HiOutlineLockClosed, HiXMark } from "react-icons/hi2";

export default function Table() {
    return (
        <table className="table table-auto">
            <thead className="table-header-group text-text-paragraph">
                <tr className="table-row bg-[#F8F8F8] border-y border-neutral-40">
                    <th className="table-cell px-7 py-2">
                        <div className="flex flex-row items-center justify-between gap-2">
                            <span>Judul Tugas</span>
                            <HiChevronUpDown />
                        </div>
                    </th>
                    <th className="table-cell px-7 py-2">
                        <div className="flex flex-row items-center justify-between gap-2">
                            <span>Deadline</span>
                            <HiChevronUpDown />
                        </div>
                    </th>
                    <th className="table-cell px-7 py-2">Status</th>
                    <th className="table-cell px-7 py-2">Action</th>
                </tr>
            </thead>
            <tbody className="table-row-group text-text-heading">
                <tr className="table-row border-y border-neutral-40">
                    <td className="table-cell px-7 py-2">Buatlah Ringkasan Fundamental Marketing</td>
                    <td className="table-cell px-7 py-2">48 jam</td>
                    <td className="table-cell px-7 py-2">
                        <div className="flex flex-row items-center justify-center gap-2 text-[#838383]">
                            <HiOutlineLockClosed />
                            <span>locked</span>
                        </div>
                    </td>
                    <td className="table-cell px-7 py-2">
                        <div className="flex flex-row items-center justify-center gap-1 text-white bg-[#949494] rounded-lg px-3 py-1">
                            <HiOutlineLockClosed />
                            <span className="mr-2">locked</span>
                            <HiChevronRight />
                        </div>
                    </td>
                </tr>
                <tr className="table-row border-y border-neutral-40">
                    <td className="table-cell px-7 py-2">Buatlah Ringkasan Fundamental Marketing coba  judulnya panjang jadi bisa sampe 2 baris </td>
                    <td className="table-cell px-7 py-2">48 jam</td>
                    <td className="table-cell px-7 py-2">
                        <div className="flex flex-row items-center justify-center gap-1 bg-[#F0FFB2] rounded-full px-3 py-1">
                            <HiOutlineClock />
                            <span className="whitespace-nowrap">Sedang diperiksa</span>
                        </div>
                    </td>
                    <td className="table-cell px-7 py-2">
                        <div className="flex flex-row items-center justify-center gap-1 text-white bg-[#949494] rounded-lg px-3 py-1">
                            <HiOutlineLockClosed />
                            <span className="mr-2">locked</span>
                            <HiChevronRight />
                        </div>
                    </td>
                </tr>
                <tr className="table-row border-y border-neutral-40">
                    <td className="table-cell px-7 py-2">Buatlah Ringkasan Fundamental Marketing coba  judulnya panjang jadi bisa sampe 2 baris </td>
                    <td className="table-cell px-7 py-2">48 jam</td>
                    <td className="table-cell px-7 py-2">
                        <div className="flex flex-row items-center justify-center gap-1 bg-[#FFE2E2] rounded-full px-3 py-1">
                            <HiXMark />
                            <span className="whitespace-nowrap">Belum dikerjakan</span>
                        </div>
                    </td>
                    <td className="table-cell px-7 py-2">
                        <div className="flex flex-row items-center justify-center gap-1 text-white bg-primary-main rounded-lg px-3 py-1">
                            <HiOutlineEye />
                            <span className="mr-2">lihat</span>
                            <HiChevronRight />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
