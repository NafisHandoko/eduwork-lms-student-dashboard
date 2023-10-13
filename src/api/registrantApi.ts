import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { registrantActions } from "../store/registrantSlice"

type FetchRegistrantProgressApiPayload = {
  payload: {
    registrant_id: number
  }
}

export const fetchRegistrantProgressApi = createAsyncThunk("services/registrant/task", async(_: FetchRegistrantProgressApiPayload, {dispatch}) => {
  try {
    const resp = await axios.get("/class/progress_using_registrant", {
      params: _.payload
    })
    const data = await resp.data
    dispatch(registrantActions.setProgress(data.data.progress))
    dispatch(registrantActions.setTask(data.data.tasks))
  } catch (error) {
    
  }
})

type SubmitTaskApiPayload = {
  payload: {
    task_id: number,
    answer: string,
    registrant_id: number
  }
}

export const submitTaskApi = createAsyncThunk("services/submit_task", async(_: SubmitTaskApiPayload, {dispatch}) => {
  try {
    dispatch(registrantActions.addLoad("submit_task"))
    const resp = await axios.post("/class/submit_task", _.payload)
    const data = await resp.data
    dispatch(registrantActions.removeLoad("submit_task"))
    return data
  } catch (error) {
    dispatch(registrantActions.removeLoad("submit_task"))
    return error
  }
})