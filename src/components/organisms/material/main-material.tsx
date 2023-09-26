import { useParams } from "react-router-dom";
import { TaskTable } from "./task";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function MainMaterial() {
    const { classId } = useParams()
    const classData = useSelector((state: RootState) => state.classState.class)
    let activeClass: any = classData.filter((kelas: any) => kelas.id == classId)

    return (
        <div className="flex flex-col px-7 gap-7">
            <div>
                <h1 className="font-bold text-2xl">{activeClass[0].title}</h1>
                <br />
                {/* <p>
                    Ini ada lah content tambahan selain video, jadi di materi kan bisa nambahin video , nah bisa nambahin text Misal kayak mau nambahin link download ppt kyk gini
                    <br />
                    <br />
                    Download slide PowerPoint (.PPTX) <a href="#" className="font-bold underline">DISINI</a>
                </p> */}
                <div dangerouslySetInnerHTML={{ __html: activeClass[0].long_desc }}></div>
            </div>
            <TaskTable />
        </div>
    )
}
