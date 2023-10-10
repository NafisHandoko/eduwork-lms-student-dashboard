import { createSlice } from "@reduxjs/toolkit"
import BaseReducer from "../utils/base-reducer"
import { RootState } from "."

const initialState = {
  loads: ['auth','fetch_class']
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

export default InitSlice.reducer