import { createSlice } from "@reduxjs/toolkit";

export const classSlice = createSlice({
    name: 'classState',
    initialState: {
        class: [],
        activeClass: {},
        activeCurriculum: {}
    },
    reducers: {
        setClassState: (state, action) => {
            state.class = action.payload
        },
        setActiveClassState: (state, action) => {
            state.activeClass = action.payload
        },
        setActiveCurriculumState: (state, action) => {
            state.activeCurriculum = action.payload
        },
    }
})

export const { setClassState, setActiveClassState, setActiveCurriculumState } = classSlice.actions
export default classSlice.reducer