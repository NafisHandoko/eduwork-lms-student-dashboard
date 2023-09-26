import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarSlice'
import classReducer from './classSlice'
import { classApi } from '../api/classApi'

const store = configureStore({
    reducer: {
        [classApi.reducerPath]: classApi.reducer,
        sidebarState: sidebarReducer,
        classState: classReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([
            classApi.middleware
        ])
})

export type RootState = ReturnType<typeof store.getState>
export default store