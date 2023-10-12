import { useParams } from "react-router-dom";
import Collapse from "../molecules/collapse";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { classActions, classCategoryAll, classCategoryByClassId, classCurriculumById, classLoading } from "@/src/store/classSlice";
import { useEffect } from "react";
import { fetchCurriculumApi } from "@/src/api/classApi";
import Skeleton from "../loader/skeleton";
import { createId } from "@/src/utils/helper";
import { setActiveCollapse } from "@/src/store/collapseSlice";
import { getRegistrantByClassId, getRegistrantLastProgress } from "@/src/store/registrantSlice";
import { fetchRegistrantProgressApi } from "@/src/api/registrantApi";

function ClassSectionLoading() {
    return (
        createId(3).map(item => (
            <div key={item.id}>
                <div>
                    <div className="flex items-center">
                        <div className="flex flex-grow p-3 space-x-2">
                            <Skeleton className="w-7 h-7 rounded-lg flex-shrink-0" />
                            <div className="space-y-1 w-full">
                                <Skeleton className="h-3 w-12 rounded-lg" />
                                <Skeleton className="h-4 w-full rounded-lg" />
                            </div>
                        </div>
                        <div className="flex-shrink-0 p-3"><Skeleton className="h-7 w-7 rounded-full" /></div>
                    </div>
                </div>
                {
                    createId(Math.floor(Math.random() * 4) + 1).map(item => (
                        <div key={item.id}>
                            <div className="flex items-center">
                                <div className="flex flex-grow p-3 px-4 space-x-2">
                                    <Skeleton className="h-7 w-full rounded-lg" />
                                </div>
                                <div className="flex-shrink-0 p-3"><Skeleton className="h-7 w-7 rounded-full" /></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        ))
    )
}

export default function ClassSection() {
    const { classId } = useParams()
    const categories = useSelector((state: RootState) => classCategoryByClassId(state,classId as unknown as number))
    const dispatch: AppDispatch = useDispatch();
    const loading = useSelector(classLoading).includes('fetch_curriculum')
    const totalCategories = categories.length
    const lastProgress = useSelector(getRegistrantLastProgress)
    const curriculumIdFromLastProgress = lastProgress?.curriculum_id
    const curriculum = useSelector((state: RootState) => classCurriculumById(state,lastProgress?.curriculum_id as unknown as number))
    const categoryId = curriculum?.curriculum_category_id
    const registrant = useSelector((state: RootState) => getRegistrantByClassId(state, classId as unknown as number))
    const registrantId = registrant?.id

    useEffect(() => {
        if (classId !== undefined) {
            dispatch(fetchCurriculumApi({
                payload: {
                    class_id: classId as unknown as number
                }
            })).then(resp => {
                dispatch(classActions.removeLoad("checking_active_curriculum"))
            })
        }
    }, [classId])

    useEffect(() => {
        if (registrantId) {
            dispatch(fetchRegistrantProgressApi({
                payload: {
                    registrant_id: registrantId
                }
            }))
        }
    }, [registrantId])

    useEffect(() => {
        if (curriculumIdFromLastProgress) {
            dispatch(classActions.setActiveCurriculum(curriculumIdFromLastProgress))
        }
    }, [curriculumIdFromLastProgress])

    useEffect(() => {
        if (categoryId) {
            dispatch(setActiveCollapse(categoryId))
        }
    }, [categoryId])

    return (
        <>
            <div className={`bg-[#D1E3FF] h-[60px] sticky top-[70px] z-10 flex items-center px-4`}>
                <h2 className="font-bold">SECTION</h2>
            </div>
            <div className={`flex flex-col w-full text-[0.8rem]`}>
                {
                    (loading) &&
                    <ClassSectionLoading />
                }
                {
                    !loading &&
                    categories.map(category => (
                        <Collapse status="finished" key={category.id} categoryData={category} />
                    ))
                }
            </div>
        </>
    )
}
