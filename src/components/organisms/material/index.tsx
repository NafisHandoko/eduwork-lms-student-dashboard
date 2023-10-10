import { Outlet, useParams } from "react-router-dom";
import Button from "../../atoms/button";
import TabMenu from "../../atoms/tab-menu";
import ClassSection from "../class-section";
import Alert from "../../molecules/alert";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { classActiveCurriculum, classById, classCurriculumById, classLoading } from "@/src/store/classSlice";
import Skeleton from "../../molecules/skeleton";

export default function ClassMaterial() {
    // const activeClass: any = useSelector((state: RootState) => state.classState.activeClass)
    const {classId} = useParams()
    const activeClass = useSelector((state:RootState) => classById(state,classId as unknown as number))
    const curriculumId = useSelector(classActiveCurriculum)
    const activeCurriculum = useSelector((state: RootState) => classCurriculumById(state,curriculumId as unknown as number))
    const loading = useSelector(classLoading).includes('fetch_curriculum')
    const checkingCurriculum = useSelector(classLoading).includes('checking_active_curriculum')

    return (
        <div className="flex flex-row items-stretch">
            <div className="flex flex-col w-full md:w-3/4 min-h-screen">
                <div>
                    <div className="flex flex-col sm:flex-row gap-3 md:items-center justify-between bg-primary-surface px-7 py-3 xl:py-0 min-h-[60px] z-10 sticky top-[70px] text-[0.8rem]">
                        {/* breadcrumb */}
                        <div className="flex flex-row gap-2 flex-wrap">
                            <div className="flex flex-row gap-2 items-center">
                                <span>My Class</span>
                                <span>&gt;</span>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <span>Kelas {activeClass?.title}</span>
                                <span>&gt;</span>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <span className="font-bold">{activeCurriculum?.title}</span>
                                <span>&gt;</span>
                            </div>
                        </div>
                        <Button text="Selesai > Next Materi" type="success" />
                    </div>
                    {/* <Alert type="warning" text="" /> */}
                    {
                        (loading || checkingCurriculum) ?
                        <div className="w-full relative">
                            <Skeleton className="w-full h-[35vw] bg-slate-200" />
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 space-x-3 flex items-center justify-center">
                                <Skeleton className="w-12 h-12 rounded-lg bg-slate-300" />
                                <Skeleton className="h-7 w-16 rounded-lg bg-slate-300" />
                            </div>
                        </div>:
                        <div className="p-4" dangerouslySetInnerHTML={{
                            __html: activeCurriculum?.description as unknown as string ?? ''
                        }}></div>
                    }
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-2 h-[60px] px-7 border-b border-b-[#dbdbdb] overflow-x-auto whitespace-nowrap sticky top-[70px] bg-white z-30 small-scroll text-[0.8rem]">
                        <TabMenu path="task" text="Tugas" />
                        {/* <TabMenu path="main" text="Materi Utama" /> */}
                        <TabMenu path="other" text="Materi Lainnya" />
                        {/* <TabMenu path="mentor" text="Kontak Mentor" /> */}
                        {/* <TabMenu path="forum" text="Forum" /> */}
                        <TabMenu path="complain" text="Keluhan" />
                        <TabMenu path="reviews" text="Ulasan" />
                    </div>
                    <div className="bg-white">
                        <Outlet />
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col w-1/4">
                <ClassSection />
            </div>
        </div>
    )
}
