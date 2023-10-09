import { TaskTable } from "./task";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function MainMaterial() {
    const activeClass: any = useSelector((state: RootState) => state.classState.activeClass)

    return (
        <div className="flex flex-col px-7 gap-7">
            <div>
                <h1 className="font-bold text-2xl">{activeClass && activeClass.title}</h1>
                <br />
                {/* <p>
                    Ini ada lah content tambahan selain video, jadi di materi kan bisa nambahin video , nah bisa nambahin text Misal kayak mau nambahin link download ppt kyk gini
                    <br />
                    <br />
                    Download slide PowerPoint (.PPTX) <a href="#" className="font-bold underline">DISINI</a>
                </p> */}
                {activeClass && <div dangerouslySetInnerHTML={{ __html: activeClass.long_desc }}></div>}
            </div>
            <TaskTable />
        </div>
    )
}
