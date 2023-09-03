import Button from "../components/atoms/button";
import Modal from "../components/modal";
import Alert from "../components/molecules/alert";
import StudentTemplate from "../components/templates/student-template";

export default function ClassChapter() {
    const onConfirm = () => {
        console.log('modal dismissed')

    }

    return (
        <StudentTemplate.ClassChapter>
            <div className="flex flex-row items-stretch">
                <div className="flex flex-col w-3/4 h-screen">
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
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/qZIQAk-BUEc?si=AfcsPrpHXIRt9d-y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                    </div>
                </div>
                <div className="flex flex-col w-1/4 bg-blue-400 h-screen"></div>
            </div>
        </StudentTemplate.ClassChapter>
    )
}
