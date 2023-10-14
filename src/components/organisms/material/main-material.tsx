import { TaskTable } from "./task";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { classById } from "@/src/store/classSlice";
import { useParams } from "react-router-dom";

export default function MainMaterial() {
    const {classId} = useParams()
    const activeClass = useSelector((state: RootState) => classById(state,classId as unknown as number))

    return (
        <div className="flex flex-col px-0 gap-7 px-5">
            <div>
                <h1 className="font-bold text-2xl">{activeClass && activeClass.title}</h1>
                {/* <br /> */}
                {/* <p>
                    Ini ada lah content tambahan selain video, jadi di materi kan bisa nambahin video , nah bisa nambahin text Misal kayak mau nambahin link download ppt kyk gini
                    <br />
                    <br />
                    Download slide PowerPoint (.PPTX) <a href="#" className="font-bold underline">DISINI</a>
                </p> */}
                {/* {activeClass && <div dangerouslySetInnerHTML={{ __html: activeClass.short_desc }}></div>} */}
            </div>
            <TaskTable />
        </div>
    )
}
