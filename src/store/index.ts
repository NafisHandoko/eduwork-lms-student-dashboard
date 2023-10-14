import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarSlice'
import classReducer from './classSlice'
import collapseReducer from './collapseSlice'
import initSliceReducer from './initSlice'
import authSlice from './authSlice'
import registrantSlice from './registrantSlice'

const store = configureStore({
    reducer: {
        sidebarState: sidebarReducer,
        classState: classReducer,
        collapseState: collapseReducer,
        initState: initSliceReducer,
        authState: authSlice,
        registrantState: registrantSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store