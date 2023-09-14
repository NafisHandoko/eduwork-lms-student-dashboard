import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        desktop: true,
        mobile: false
    },
    reducers: {
        toggleSidebar: (state) => {
            state.desktop = !state.desktop
            state.mobile = !state.mobile
        },
    }
})

export const { toggleSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer