import { Outlet } from "react-router-dom";
import StudentTemplate from "../components/templates/student-template";

export default function ClassChapter({ isExpand, setIsExpand }: any) {
    return (
        <StudentTemplate.ClassChapter isExpand={isExpand} setIsExpand={setIsExpand}>
            <Outlet />
        </StudentTemplate.ClassChapter>
    )
}
