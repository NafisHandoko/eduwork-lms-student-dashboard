import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { app } from "../config/app"
import { initActions } from "../store/initSlice"
import { authActions } from "../store/authSlice"
import { AxiosWrapper } from "../utils/base-axios"


type LoginApiPayload = {
  payload: {}
}

export const LoginApi = createAsyncThunk("services/auth/login", async (_: LoginApiPayload, {dispatch,getState,rejectWithValue}) => {
  try {
    const resp = await axios.post(`${app.APP_URL}/ap/lmsstudentapi/get_auth`, {}, {
      withCredentials: true
    })
    const data = await resp.data
    AxiosWrapper.init({
      authorization: data.api_token
    })
    dispatch(authActions.storeUser(data))
    dispatch(initActions.removeLoad("auth"))
    return data
  } catch (error) {
    return error
  }
})
