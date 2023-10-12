import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { CurriculumType } from "../types/ClassTypes"
import { classActiveCurriculum, classCategoryById, classCurriculumById, classTaskByCurriculumId } from "../classSlice"
import { selectRegistrantProgressByCurriculumId, selectRegistrantTaskAllByCurriculumId, selectRegistrantTaskFinishedByCurriculumId, selectRegistrantTaskResolvedByCurriculumId, selectRegistrantTaskUnresolvedByCurriculumId } from "../registrantSlice"
import { RootState } from ".."

export type StatusType = 'finished' | 'ongoing' | 'waiting' | 'unfinished' | 'unlocked' | 'locked' | null

export const useGetCurriculumStatus = (curriculum: CurriculumType) => {
  const activeCurriculumId = useSelector(classActiveCurriculum)
  const activeCurriculum = useSelector((state: RootState) => classCurriculumById(state,activeCurriculumId as unknown as number))
  const activeCurriculumCategory = useSelector((state: RootState) => classCategoryById(state,activeCurriculum?.curriculum_category_id as unknown as number))
  const activeCurriculumCategoryId = activeCurriculumCategory?.id

  
  const currentCurriculumCategory = useSelector((state: RootState) => classCategoryById(state, curriculum?.curriculum_category_id as unknown as number))
  
  const currentProgress = useSelector((state: RootState) => selectRegistrantProgressByCurriculumId(state, curriculum.id))
  
  const currentClassTaskAll = useSelector((state: RootState) => classTaskByCurriculumId(state,curriculum.id))
  const currentTaskAll = useSelector((state: RootState) => selectRegistrantTaskAllByCurriculumId(state,curriculum.id))
  const currentTaskUnresolved = useSelector((state: RootState) => selectRegistrantTaskUnresolvedByCurriculumId(state, curriculum.id))
  const currentTaskResolved = useSelector((state: RootState) => selectRegistrantTaskResolvedByCurriculumId(state, curriculum.id))
  const currentTaskFinished = useSelector((state: RootState) => selectRegistrantTaskFinishedByCurriculumId(state, curriculum.id))

  const [currentStatus, setCurrentStatus] = useState<StatusType>(null)
  
  useEffect(() => {
    const currentLocked = ((currentCurriculumCategory?.sort ?? 0) == (activeCurriculumCategory?.sort ?? 0) && ((curriculum.sort as unknown as number) > (activeCurriculum?.sort as unknown as number))) || (currentCurriculumCategory?.sort as unknown as number) > (activeCurriculumCategory?.sort as unknown as number)
    if (activeCurriculumId && activeCurriculumCategoryId) {
      // is locked
      if (currentLocked) {
        setCurrentStatus('locked')
      } else {
        // is unlocked
        // unlock but not opened
        if (!currentProgress) {
          setCurrentStatus('unlocked')
        }
        // finished 
        else if (currentProgress.status == 'finish' || (currentClassTaskAll.length > 0 && currentTaskFinished) || currentClassTaskAll.length == 0) {
          setCurrentStatus('finished')
        }
        // waiting
        else if(currentProgress.status == 'done' || (currentClassTaskAll.length > 0 && currentTaskResolved)) {
          setCurrentStatus('waiting')
        }
        // unresolve
        else if(currentTaskUnresolved && currentClassTaskAll.length > 0) {
          setCurrentStatus('unfinished')
        }
      }
    } else {
      // lock if still setup
      setCurrentStatus("locked")
    }
  }, [activeCurriculumId,activeCurriculumCategoryId])

  return currentStatus
}