import { Outlet } from "react-router-dom";
import Button from "../../atoms/button";
import TabMenu from "../../atoms/tab-menu";
import ClassSection from "../class-section";

export default function ClassMaterial() {
    return (
        <div className="flex flex-row items-stretch">
            <div className="flex flex-col w-3/4 min-h-screen">
                <div className="flex flex-row items-center justify-between bg-primary-surface px-7 py-3">
                    {/* breadcrumb */}
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row gap-2 items-center">
                            <span>My Class</span>
                            <span>&gt;</span>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <span>Kelas Digital Marketing</span>
                            <span>&gt;</span>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <span className="font-bold">Intro Menjadi Digital Marketing</span>
                            <span>&gt;</span>
                        </div>
                    </div>
                    <Button text="Selesai > Next Materi" type="success" />
                </div>
                <div className="px-7 py-5 bg-flowkit-cream">
                    <p>Hai Guys, Setelah nonton video ini nanti akan ada tugas, jangan lupa  klik tombol “selesai” kanan atas ya setelah itu kamu bisa mulai mengerjakan tugas dibawah ini , klik disini</p>
                </div>
                <div>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/1OiuLxkIIj0?si=Y7cuaE4jZjzcTSvu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-2 h-[60px] mx-7 border-b border-b-[#dbdbdb] overflow-x-scroll whitespace-nowrap">
                        <TabMenu path="main" text="Materi Utama" />
                        <TabMenu path="other" text="Materi Lainnya" />
                        <TabMenu path="task" text="Tugas" />
                        <TabMenu path="mentor" text="Kontak Mentor" />
                        <TabMenu path="forum" text="Forum" />
                        <TabMenu path="complain" text="Keluhan" />
                        <TabMenu path="reviews" text="Ulasan" />
                    </div>
                    <Outlet />
                </div>
            </div>
            <div className="flex flex-col w-1/4">
                <ClassSection />
            </div>
        </div>
    )
}
