import { createSlice } from "@reduxjs/toolkit";

export const collapseSlice = createSlice({
    name: 'collapseSlice',
    initialState: {
        activeCollapse: 0
    },
    reducers: {
        setActiveCollapse: (state, action) => {
            if (action.payload == state.activeCollapse) {
                state.activeCollapse = 0
            } else {
                state.activeCollapse = action.payload
            }
        }
    }
})

export const { setActiveCollapse } = collapseSlice.actions
export default collapseSlice.reducer