import { HiChevronRight, HiChevronUpDown, HiOutlineClock, HiOutlineEye, HiOutlineInformationCircle, HiOutlineLockClosed, HiXMark } from "react-icons/hi2";
import { TBody, TColumn, THeader, TRow, Table } from "../../molecules/table";
import { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/src/store";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrantByClassId, getRegistrantTaskUnfinished, getRegistrantTaskUnresolved, registrantLoading } from "@/src/store/registrantSlice";
import { useParams } from "react-router-dom";
import { fetchRegistrantProgressApi, submitTaskApi } from "@/src/api/registrantApi";
import moment from "moment";
import { createPortal } from "react-dom";
import { TaskType } from "@/src/store/types/RegistrantTypes";
import { classCategoryById, classCurriculumById } from "@/src/store/classSlice";
import { toast } from "react-toastify";
import Loader from "../../all/loader";

interface ShowTaskModalProps {
    modalDismissed: boolean;
    setModalDismissed: Dispatch<SetStateAction<boolean>>;
    onConfirm?: MouseEventHandler
    task: TaskType
}

function ShowTaskModal({modalDismissed,setModalDismissed,onConfirm,task}: ShowTaskModalProps) {
    const dispatch: AppDispatch = useDispatch()
    const curriculum = useSelector((state: RootState) => classCurriculumById(state, task.curriculum_id as unknown as number))
    const curriculumCategory = useSelector((state: RootState) => classCategoryById(state, curriculum?.curriculum_category_id as unknown as number))
    const submitLoading = useSelector(registrantLoading).includes("submit_task")
    const [answer,setAnswer] = useState('')

    const _handleSubmitTask = () => {
        dispatch(submitTaskApi({
            payload: {
                answer: answer,
                task_id: task.id,
                registrant_id: task.registrant_id as unknown as number
            }
        })).then(resp => {
            toast("Task Submitted.", {
                type: 'success'
            })
        }).catch((err) => {
            toast("Error Submit!", {
                type: 'error'
            })
        })
    }
    
    return (
        <div className={`fixed inset-0 flex items-center justify-center z-[999] bg-black bg-opacity-50 ${modalDismissed ? 'hidden' : ''}`}>
            <div className="bg-white rounded-lg flex flex-col w-full md:max-w-[50vw]">
                <div className="flex flex-col gap-4 p-5">
                    <div className="flex flex-row gap-2 items-start justify-between">
                        <h1 className="text-neutral-90 text-xl font-medium space-y-3">
                            <div className="flex items-center space-x-2">
                                <div>{task.title}</div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="text-xs p-2 bg-gray-200 rounded-lg">{curriculumCategory?.title}</div>
                                <div>{'>'}</div>
                                <div className="text-xs p-2 bg-gray-200 rounded-lg">{curriculum?.title}</div>
                            </div>
                        </h1>
                        <button onClick={() => setModalDismissed(true)} className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"><HiXMark /></button>
                    </div>
                </div>
                <div className="px-5"><hr /></div>
                <div className="p-5" dangerouslySetInnerHTML={{
                    __html: task.description ?? ''
                }} />
                <div className="px-5 pb-3">
                    <textarea name="" id="" rows={5} className="w-full resize-none border rounded p-4" placeholder="Tulis Jawaban" onChange={(e) => setAnswer(e.target.value)} value={answer}></textarea>
                </div>
                <button className={`px-4 py-3 text-white rounded-b-lg ${submitLoading ? 'bg-gray-300': 'bg-blue-600 hover:bg-blue-700'}`} disabled={submitLoading} onClick={() => _handleSubmitTask()}>
                    {
                        submitLoading &&
                        <Loader className="mr-2" />
                    }
                    Submit
                </button>
            </div>
        </div>
    )
}

function TaskItem ({item}: {item: TaskType}) {
    const [modalDismissed,setModalDismissed] = useState(true)
    const curriculum = useSelector((state:RootState) => classCurriculumById(state,item.curriculum_id as unknown as number))
    const curriculumCategory = useSelector((state:RootState) => classCategoryById(state,curriculum?.curriculum_category_id as unknown as number))
    return (
        <TRow>
            <TColumn>
                <div className="flex flex-col items-start space-y-1">
                    <div className="font-semibold text-sm">{item.title}</div>
                    <div className="flex items-center space-x-1">
                        <div className="text-xs rounded-lg bg-gray-100 px-2 py-1 inline-block">{curriculumCategory?.title}</div>
                        <div>{">"}</div>
                        <div className="text-xs rounded-lg bg-gray-100 px-2 py-1 inline-block">{curriculum?.title}</div>
                    </div>
                </div>
            </TColumn>
            <TColumn>{item.deadline_date ? moment(item.deadline_date).fromNow(): 'Tidak ada deadline.'}</TColumn>
            <TColumn>
                {
                    item.status == 'progress' &&
                    <div className="flex flex-row items-center justify-center gap-1 bg-[#FFE2E2] rounded-full px-3 py-1">
                        <HiXMark />
                        <span className="whitespace-nowrap">Belum dikerjakan</span>
                    </div>
                }
                {
                    item.status == 'done' &&
                    <div className="flex flex-row items-center justify-center gap-1 bg-yellow-300 rounded-full px-3 py-1">
                        <HiOutlineInformationCircle />
                        <span className="whitespace-nowrap">Sedang Diperiksa</span>
                    </div>
                }
            </TColumn>
            <TColumn>
                <>
                    {
                        item.status == 'progress' &&
                        <>
                            <div className="flex flex-row items-center justify-center gap-1 text-white bg-primary-main rounded-lg px-3 py-1 cursor-pointer" onClick={() => setModalDismissed(!modalDismissed)}>
                                <HiOutlineEye />
                                <span className="mr-2">Submit</span>
                                <HiChevronRight />
                                
                            </div>
                            {
                                !modalDismissed &&
                                createPortal(
                                    <ShowTaskModal task={item} modalDismissed={modalDismissed} setModalDismissed={setModalDismissed} />,
                                    document.body
                                )
                            }
                        </>
                    }
                    {
                        item.status == 'done' &&
                        <div>Sudah Dikirim</div>
                    }
                </>
            </TColumn>
        </TRow>
    )
}

export function TaskTable() {
    const unfinishedTasks = useSelector(getRegistrantTaskUnfinished)

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
                    <div className="flex flex-row items-center justify-center gap-2">
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
                    unfinishedTasks.map((item: TaskType) => (
                        <TaskItem item={item} key={item.id} />
                    ))
                }
            </TBody>
        </Table>
    )
}

export default function Task() {

    return (
        <div className="flex flex-col px-7 gap-7">
            <h1 className="font-bold text-lg">Tugas Digital Marketing Fundamentals</h1>
            <TaskTable />
        </div>
    )
}
