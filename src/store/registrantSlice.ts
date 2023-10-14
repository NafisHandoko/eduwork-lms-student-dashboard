import { TaskType } from '@/src/store/types/RegistrantTypes';
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import BaseReducer from "../utils/base-reducer"
import { RootState } from "."
import { RegistrantInterface } from "./types/RegistrantTypes"
import moment from "moment"
import { classCategoryById, classCurriculumByCategoryId } from './classSlice';

const initialState: RegistrantInterface = {
  registrant: [],
  progress: [],
  task: [],
  loads: []
}

const RegistrantSlice = createSlice({
  name: 'services/registrant',
  initialState,
  reducers: {
    ...BaseReducer,
    setRegistrants: (state, {payload}) => {
      state.registrant = payload
    },
    setProgress: (state, {payload}) => {
      state.progress = payload
    },
    setTask: (state, {payload}) => {
      state.task = payload
    },
    updateTask: (state, action: PayloadAction<TaskType>) => {
      const index = state.task.findIndex(item => item.id == action.payload.id)
      if (index > -1) {
        state.task.splice(index, 1, action.payload)
      }
    }
  }
})

export const registrantActions = RegistrantSlice.actions

export const registrantLoading = (state:RootState) => state.registrantState.loads

export const getRegistrantAll = (state:RootState) => state.registrantState.registrant
export const getRegistrantByClassId = createSelector([getRegistrantAll, (state: RootState, class_id: number) => class_id], (registrants, class_id) => {
  return registrants.find(item => item.class_id == class_id)
})

export const getRegistrantProgressAll = (state:RootState) => state.registrantState.progress
export const getRegistrantLastProgress = (state: RootState) => {
  const progress = [...state.registrantState.progress]; // Create a shallow copy of the progress array
  progress.sort((a, b) => {
    const dateA = moment(b.created_at);
    const dateB = moment(a.created_at);

    return dateA.isBefore(dateB) ? -1 : dateA.isAfter(dateB) ? 1 : 0;
  });
  return progress[0];
};
export const selectRegistrantProgressByCurriculumId = createSelector([getRegistrantProgressAll, (state: RootState, curriculum_id: number) => curriculum_id], (progress, curriculum_id) => {
  return progress.find(item => item.curriculum_id == curriculum_id)
})

export const getRegistrantTaskAll = (state:RootState) => state.registrantState.task
export const getRegistrantTaskUnresolved = createSelector([getRegistrantTaskAll], (tasks) => {
  return tasks.filter(item => item.status == 'progress')
})
export const getRegistrantTaskUnfinished = createSelector([getRegistrantTaskAll], (tasks) => {
  return tasks.filter(item => item.status != 'finish')
})
export const selectRegistrantTaskAllByCurriculumId = createSelector([getRegistrantTaskAll, (state: RootState, curriculum_id) => curriculum_id], (tasks, curriculum_id) => {
  return tasks.filter(item => item.curriculum_id == curriculum_id)
})
export const selectRegistrantTaskUnresolvedByCurriculumId = createSelector([getRegistrantTaskAll, (state: RootState, curriculum_id) => curriculum_id], (tasks, curriculum_id) => {
  return (tasks.filter(item => item.status == 'progress' && item.curriculum_id == curriculum_id).length > 0)
})
export const selectRegistrantTaskResolvedByCurriculumId = createSelector([getRegistrantTaskAll, (state: RootState, curriculum_id) => curriculum_id], (tasks, curriculum_id) => {
  return tasks.filter(item => (item.status == 'done') && item.curriculum_id == curriculum_id).length > 0
})
export const selectRegistrantTaskFinishedByCurriculumId = createSelector([getRegistrantTaskAll, (state: RootState, curriculum_id) => curriculum_id], (tasks, curriculum_id) => {
  return tasks.filter(item => (item.status == 'finish') && item.curriculum_id == curriculum_id).length > 0
})

export const selectRegistrantTaskAllByCategoryId = createSelector(
  [getRegistrantTaskAll, (state: RootState, categoryId: number) => ({
    category: classCategoryById(state,categoryId),
    curriculums: classCurriculumByCategoryId(state, categoryId)
  })],
  (tasks, _) => {
    const curriculumIds = _.curriculums.map(item => item.id)
    return tasks.filter(item => curriculumIds.includes(item.curriculum_id as unknown as number))
  }
)


export default RegistrantSlice.reducer