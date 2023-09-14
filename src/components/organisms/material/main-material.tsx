import { TaskTable } from "./task";

export default function MainMaterial() {
    return (
        <div className="flex flex-col px-7 gap-7">
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
            <TaskTable />
        </div>
    )
}
