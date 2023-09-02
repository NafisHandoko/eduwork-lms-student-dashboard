import { useState } from "react";
import StudentTemplate from "../components/templates/student-template";

export default function ClassChapter() {
    const [isExpand, setIsExpand] = useState(true)
    return (
        <StudentTemplate.Default title="">

        </StudentTemplate.Default>
  )
}
