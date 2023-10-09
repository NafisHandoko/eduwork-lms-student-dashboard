import { Outlet, useParams } from "react-router-dom";
import StudentTemplate from "../components/templates/student-template";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useMemo, useEffect } from 'react'
import { setActiveClassState } from "../store/classSlice";

export default function ClassChapter() {
    const { classId } = useParams()
    const classData = useSelector((state: RootState) => state.classState.class)
    const activeClass: any = useMemo(() => classData.filter((kelas: any) => kelas.id == classId)[0], [classData])
    const dispatch = useDispatch();

    useEffect(() => {
        if (activeClass) {
            dispatch(setActiveClassState(activeClass));
        }
    }, [activeClass])

    return (
        <StudentTemplate.ClassChapter>
            <Outlet />
        </StudentTemplate.ClassChapter>
    )
}
