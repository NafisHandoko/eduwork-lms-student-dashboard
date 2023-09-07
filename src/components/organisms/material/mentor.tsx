import { HiChatBubbleLeftRight, HiEnvelope, HiOutlineBookmark, HiStar } from "react-icons/hi2";
import { RiWhatsappFill } from "react-icons/ri";
import EduworkLogoMini from '../../../assets/eduwork-logo-mini.png'
import MentorClassDummyImg from '../../../assets/dummy/mentor-class.png'
import MentorPhoto from '../../../assets/dummy/mentor-photo.jpeg'

function MentorCard() {
    return (
        <div className="flex flex-row gap-5 items-stretch">
            <div className="rounded-2xl bg-center bg-cover w-1/4" style={{ backgroundImage: `url(${MentorPhoto})` }}></div>
            <div className="flex flex-col gap-4 w-1/2">
                <div className="flex flex-row items-center justify-between">
                    <span className="font-medium text-lg text-text-heading">Pelita Nur Najmina</span>
                    <HiOutlineBookmark className="text-lg" />
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <img src={EduworkLogoMini} alt="" className="w-11" />
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-text-heading">Programmer</span>
                        <span className="text-sm font-medium text-[#989898]">Eduwork</span>
                    </div>
                </div>
                <div className="flex flex-row gap-3">
                    <div className="flex flex-row items-center gap-1">
                        <HiStar className="text-secondary-main" />
                        <HiStar className="text-secondary-main" />
                        <HiStar className="text-secondary-main" />
                        <HiStar className="text-secondary-main" />
                        <HiStar className="text-neutral-40" />
                    </div>
                    <span className="text-text-heading font-medium text-xs">4.0 ・ 100 Siswa ・ 75 Tersalurkan</span>
                </div>
                <div className="flex flex-row border-y py-4 gap-3">
                    <div className="flex flex-row items-center gap-1">
                        <HiChatBubbleLeftRight className="text-primary-main" />
                        <span className="text-text-heading/[.75] text-xs font-medium">Q&A Chats</span>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <RiWhatsappFill className="text-primary-main" />
                        <span className="text-text-heading/[.75] text-xs font-medium">WA Calls</span>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <HiEnvelope className="text-primary-main" />
                        <span className="text-text-heading/[.75] text-xs font-medium">Email</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-text-heading font-medium text-xs">Kelas Terbaru</span>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row items-scretch gap-2 w-1/2">
                            <img src={MentorClassDummyImg} alt="" className="rounded-xl object-cover w-12 h-12" />
                            <div className="flex flex-col gap-1">
                                <span className="text-text-heading text-xs font-medium">Membuat Design System</span>
                                <span className="text-text-heading text-xs">Front End Developer</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-scretch gap-2 w-1/2">
                            <img src={MentorClassDummyImg} alt="" className="rounded-xl object-cover w-12 h-12" />
                            <div className="flex flex-col gap-1">
                                <span className="text-text-heading text-xs font-medium">Design Hand-Off</span>
                                <span className="text-text-heading text-xs">Back End Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/4 flex flex-col gap-5">
                <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-5">
                    <div className="flex flex-row justify-between items-center gap-2">
                        <span className="text-primary-main text-sm font-medium">Pengenalan</span>
                        <span className="text-[#797979] text-sm font-medium">Skills</span>
                    </div>
                    <p className="text-xs text-text-heading">I am a general intelligence living in Lisbon. My training and my primary research interest is software engineering. I believe that one of the essentials goals of our generation is to upgrade ...</p>
                </div>
                <button className="text-white bg-primary-main rounded-lg py-2">Lihat Profil</button>
            </div>
        </div>
    )
}

export default function Mentor() {
    return (
        <div className="flex flex-col px-7 gap-7">
            <MentorCard />
            <MentorCard />
            <MentorCard />
        </div>
    )
}
