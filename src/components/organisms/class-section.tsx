import { useParams } from "react-router-dom";
import Collapse from "../molecules/collapse";
import { useGetClassesCurriculumQuery } from "../../api/classApi";

export default function ClassSection() {
    const { classId } = useParams()
    // const { isLoading, isError, error, data: fetchedClassesCurriculumData } = useGetClassesCurriculumQuery(classId)
    const { data: fetchedClassesCurriculumData } = useGetClassesCurriculumQuery(classId)

    return (
        <>
            <div className="bg-[#D1E3FF] h-[60px] sticky top-[70px] z-10 flex items-center px-4">
                <h2 className="text-2xl font-bold">SECTION</h2>
            </div>
            <div className="flex flex-col w-full">
                {fetchedClassesCurriculumData && fetchedClassesCurriculumData.data.categories.map((category: any) => (
                    <Collapse status="finished" key={category.id} categoryData={category} curriculumData={fetchedClassesCurriculumData.data.curriculums[0].filter((curriculum: any) => curriculum.curriculum_category_id == category.id)} />
                ))}
            </div>
        </>
    )
}
