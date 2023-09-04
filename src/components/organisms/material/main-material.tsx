import { HiChevronUpDown } from "react-icons/hi2";

export default function MainMaterial() {
    return (
        <div className="flex flex-col px-7">
            <div>
                <h1 className="font-bold text-2xl">Intro Menjadi Digital Marketing</h1>
                <br />
                <p>
                    Ini ada lah content tambahan selain video, jadi di materi kan bisa nambahin video , nah bisa nambahin text Misal kayak mau nambahin link download ppt kyk gini
                    <br />
                    <br />
                    Download slide PowerPoint (.PPTX) <a href="#" className="font-bold underline">DISINI</a>
                </p>
            </div>
            <table className="table mt-7">
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
                        <td className="table-cell px-7 py-2">locked</td>
                        <td className="table-cell px-7 py-2">locked</td>
                    </tr>
                    <tr className="table-row border-y border-neutral-40">
                        <td className="table-cell px-7 py-2">Buatlah Ringkasan Fundamental Marketing</td>
                        <td className="table-cell px-7 py-2">48 jam</td>
                        <td className="table-cell px-7 py-2">locked</td>
                        <td className="table-cell px-7 py-2">locked</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
