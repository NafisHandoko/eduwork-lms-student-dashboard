import { createSlice } from "@reduxjs/toolkit";

export const classSlice = createSlice({
    name: 'classState',
    initialState: {
        class: [],
        activeClass: {}
    },
    reducers: {
        setClassState: (state, action) => {
            state.class = action.payload
        },
        setActiveClassState: (state, action) => {
            state.activeClass = action.payload
        },
    }
})

export const { setClassState, setActiveClassState } = classSlice.actions
export default classSlice.reducer