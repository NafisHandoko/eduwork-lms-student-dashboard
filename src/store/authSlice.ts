import { createSlice } from "@reduxjs/toolkit"
import BaseReducer from "../utils/base-reducer"
import { RootState } from "."
import { AuthStateInterface } from "./types/AuthTypes"

const initialState: AuthStateInterface = {
  user: null,
  loads: []
}

const AuthSlice = createSlice({
  name: 'slice/auth',
  initialState,
  reducers: {
    ...BaseReducer,
    storeUser: (state, {payload}) => {
      state.user = payload
    }
  }
})

export const authActions = AuthSlice.actions

export const getAuthLoading = (state: RootState) => state.authState.loads
export const getAuthUser = (state: RootState) => state.authState.user

export default AuthSlice.reducer