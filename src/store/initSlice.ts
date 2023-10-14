import { createSlice } from "@reduxjs/toolkit"
import BaseReducer from "../utils/base-reducer"
import { RootState } from "."

const loadings = ['auth','fetch_class']

const initialState: {
  loads: Array<string>
  total: number
} = {
  loads: ['auth','fetch_class'],
  total: loadings.length
}

const InitSlice = createSlice({
  name: 'slice/init',
  initialState,
  reducers: {
    ...BaseReducer
  }
})

export const initActions = InitSlice.actions

export const getLoading = (state: RootState) => state.initState.loads
export const getTotal = (state: RootState) => state.initState.total

export default InitSlice.reducer