import { createSelector, createSlice } from "@reduxjs/toolkit"
import BaseReducer from "../utils/base-reducer"
import { RootState } from "."
import { RegistrantInterface } from "./types/RegistrantTypes"
import moment from "moment"

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
    }
  }
})

export const registrantActions = RegistrantSlice.actions

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

export const getRegistrantTaskAll = (state:RootState) => state.registrantState.task
export const getRegistrantTaskUnresolved = createSelector([getRegistrantTaskAll], (tasks) => {
  return tasks.filter(item => item.status == 'progress')
})

export default RegistrantSlice.reducer