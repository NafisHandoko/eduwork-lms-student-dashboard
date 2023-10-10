import { HiChevronRight, HiChevronUpDown, HiOutlineClock, HiOutlineEye, HiOutlineLockClosed, HiXMark } from "react-icons/hi2";
import { TBody, TColumn, THeader, TRow, Table } from "../../molecules/table";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/src/store";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrantByClassId, getRegistrantTaskUnresolved } from "@/src/store/registrantSlice";
import { useParams } from "react-router-dom";
import { fetchRegistrantProgressApi } from "@/src/api/registrantApi";
import moment from "moment";

export function TaskTable() {
    const unresolvedTasks = useSelector(getRegistrantTaskUnresolved)

    return (
        <Table>
            <THeader>
                <TColumn>
                    <div className="flex flex-row items-center justify-between gap-2">
                        <span>Judul Tugas</span>
                        <button><HiChevronUpDown /></button>
                    </div>
                </TColumn>
                <TColumn>
                    <div className="flex flex-row items-center justify-between gap-2">
                        <span>Deadline</span>
                        <button><HiChevronUpDown /></button>
                    </div>
                </TColumn>
                <TColumn>Status</TColumn>
                <TColumn>Action</TColumn>
            </THeader>
            <TBody>
                {/* <TRow>
                    <TColumn>Buatlah Ringkasan Fundamental Marketing</TColumn>
                    <TColumn>48 jam</TColumn>
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
                    <TColumn>Buatlah Ringkasan Fundamental Marketing coba  judulnya panjang jadi bisa sampe 2 baris </TColumn>
                    <TColumn>48 jam</TColumn>
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
                    <TColumn>Buatlah Ringkasan Fundamental Marketing coba  judulnya panjang jadi bisa sampe 2 baris </TColumn>
                    <TColumn>48 jam</TColumn>
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
                </TRow> */}
                {
                    unresolvedTasks.map(item => (
                        <TRow key={item.id}>
                            <TColumn>{item.title}</TColumn>
                            <TColumn>{item.deadline_date ? moment(item.deadline_date).fromNow(): 'Tidak ada deadline.'}</TColumn>
                            <TColumn>
                                {
                                    item.status == 'progress' &&
                                    <div className="flex flex-row items-center justify-center gap-1 bg-[#FFE2E2] rounded-full px-3 py-1">
                                        <HiXMark />
                                        <span className="whitespace-nowrap">Belum dikerjakan</span>
                                    </div>
                                }
                            </TColumn>
                            <TColumn>
                                <div className="flex flex-row items-center justify-center gap-1 text-white bg-primary-main rounded-lg px-3 py-1">
                                    <HiOutlineEye />
                                    <span className="mr-2">lihat</span>
                                    <HiChevronRight />
                                </div>
                            </TColumn>
                        </TRow>
                    ))
                }
            </TBody>
        </Table>
    )
}

export default function Task() {
    const dispatch: AppDispatch = useDispatch();
    const {classId} = useParams()
    const registrant = useSelector((state: RootState) => getRegistrantByClassId(state, classId as unknown as number))
    const registrantId = registrant?.id
    useEffect(() => {
        if (registrantId) {
            dispatch(fetchRegistrantProgressApi({
                payload: {
                    registrant_id: registrantId
                }
            }))
        }
    }, [registrantId])
    return (
        <div className="flex flex-col px-7 gap-7">
            <h1 className="font-bold text-lg">Tugas Digital Marketing Fundamentals</h1>
            <TaskTable />
        </div>
    )
}
