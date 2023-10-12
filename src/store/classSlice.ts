import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { ClassStateInterface } from "./types/ClassTypes";
import BaseReducer from "../utils/base-reducer";

const initialState: ClassStateInterface = {
    class: [],
    curriculum: [],
    category: [],
    otherMaterial: [],
    reviewCurriculum: [],
    loads: [],
    activeClass: {},
    activeCurriculum: null
}

export const classSlice = createSlice({
    name: 'classState',
    initialState,
    reducers: {
        ...BaseReducer,
        setClassState: (state, action) => {
            state.class = action.payload
        },
        setActiveClassState: (state, action) => {
            state.activeClass = action.payload
        },
        setActiveCurriculum: (state, {payload}) => {
            state.activeCurriculum = payload
        },
        setCategories: (state, {payload}) => {
            state.category = payload
        },
        setCurriculums: (state, {payload}) => {
            state.curriculum = payload
        },
        setOtherMaterials: (state, {payload}) => {
            state.otherMaterial = payload
        },
        setReviewCurriculums: (state, {payload}) => {
            state.reviewCurriculum = payload
        }
    }
})

export const { setClassState, setActiveClassState } = classSlice.actions
export const classActions = classSlice.actions

export const classActiveCurriculum = (state:RootState) => state.classState.activeCurriculum

export const classLoading = (state:RootState) => state.classState.loads

export const classAll = (state:RootState) => state.classState.class
export const classById = createSelector([classAll, (state:RootState, class_id: number) => class_id], (classes, class_id) => {
    return classes.find(item => item.id == class_id)
})

export const classCategoryAll = (state:RootState) => state.classState.category
export const classCategoryByClassId = createSelector([classCategoryAll, (state:RootState, class_id: number) => class_id], (categories, class_id) => {
    return categories.filter(item => item.class_id == class_id).sort((a, b) => (a.sort || 0) - (b.sort || 0))
})
export const classCategoryById = createSelector([classCategoryAll, (state:RootState, id: number) => id], (categories, id) => {
    return categories.find(item => item.id == id)
})

export const classCurriculumAll = (state:RootState) => state.classState.curriculum
export const classCurriculumByCategoryId = createSelector([classCurriculumAll, (state:RootState, category_id: number) => category_id], (curriculums, category_id) => {
    return curriculums.filter(item => item.curriculum_category_id == category_id).sort((a, b) => (a.sort || 0) - (b.sort || 0))
})
export const classCurriculumById = createSelector([classCurriculumAll, (state:RootState, id: number) => id], (curriculums, id) => {
    return curriculums.find(item => item.id == id)
})

export const classOtherMaterialAll = (state:RootState) => state.classState.otherMaterial

export const classReviewCurriculumAll = (state:RootState) => state.classState.reviewCurriculum

export default classSlice.reducer