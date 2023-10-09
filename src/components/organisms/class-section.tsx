import { useParams } from "react-router-dom";
import Collapse from "../molecules/collapse";
import { useGetClassesCurriculumQuery } from "../../api/classApi";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function ClassSection() {
    // const dummyClassesCurriculumData = {
    //     data: {
    //         categories: [
    //             {
    //                 id: 1,
    //                 title: 'test'
    //             },
    //             {
    //                 id: 2,
    //                 title: 'test2'
    //             },
    //         ],
    //         curriculums: [[
    //             {
    //                 id: 1,
    //                 title: 'test',
    //                 curriculum_category_id: 1
    //             },
    //             {
    //                 id: 2,
    //                 title: 'test',
    //                 curriculum_category_id: 1
    //             },
    //             {
    //                 id: 3,
    //                 title: 'test',
    //                 curriculum_category_id: 2
    //             },
    //             {
    //                 id: 4,
    //                 title: 'test',
    //                 curriculum_category_id: 2
    //             },
    //         ]]
    //     }
    // }

    const { classId } = useParams()
    // const { isLoading, isError, error, data: fetchedClassesCurriculumData } = useGetClassesCurriculumQuery(classId)
    const { data: fetchedClassesCurriculumData } = useGetClassesCurriculumQuery(classId)
    // const fetchedClassesCurriculumData = dummyClassesCurriculumData
    const activeCollapse = useSelector((state: RootState) => state.collapseState.activeCollapse)

    return (
        <>
            <div className={`bg-[#D1E3FF] h-[60px] ${activeCollapse == 0 ? 'sticky top-[70px] z-10' : ''} flex items-center px-4`}>
                <h2 className="text-2xl font-bold">SECTION</h2>
            </div>
            <div className={`flex flex-col w-full ${activeCollapse != 0 ? 'sticky top-[70px] z-10' : ''}`}>
                {fetchedClassesCurriculumData && fetchedClassesCurriculumData.data.categories.map((category: any) => (
                    <Collapse status="finished" key={category.id} categoryData={category} curriculumData={fetchedClassesCurriculumData.data.curriculums[0].filter((curriculum: any) => curriculum.curriculum_category_id == category.id)} />
                ))}
            </div>
        </>
    )
}
