import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarSlice'

const sidebarStore = configureStore({
    reducer: {
        sidebar: sidebarReducer
    },
})

export type SidebarStateType = ReturnType<typeof sidebarStore.getState>
export default sidebarStore