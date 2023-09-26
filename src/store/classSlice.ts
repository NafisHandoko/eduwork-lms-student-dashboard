import { createSlice } from "@reduxjs/toolkit";

export const classSlice = createSlice({
    name: 'classState',
    initialState: {
        class: []
    },
    reducers: {
        setClassState: (state, action) => {
            state.class = action.payload
        }
    }
})

export const { setClassState } = classSlice.actions
export default classSlice.reducer