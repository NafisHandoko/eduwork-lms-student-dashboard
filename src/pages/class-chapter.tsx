import { Outlet } from "react-router-dom";
import StudentTemplate from "../components/templates/student-template";

export default function ClassChapter() {
    return (
        <StudentTemplate.ClassChapter>
            <Outlet />
        </StudentTemplate.ClassChapter>
    )
}
