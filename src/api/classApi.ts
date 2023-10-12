import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { classActions } from '../store/classSlice';
import { initActions } from '../store/initSlice';
import { registrantActions } from '../store/registrantSlice';

type FetchClassApiPayload = {
  payload: {}
}

export const fetchClassApi = createAsyncThunk("services/class_api", async (_: FetchClassApiPayload, {dispatch}) => {
  try {
    const resp = await axios.get("/class/all", {
      params: {
        ..._.payload
      }
    })
    const data = await resp.data
    dispatch(classActions.setClassState(data.data.class))
    dispatch(registrantActions.setRegistrants(data.data.registrants))
    dispatch(initActions.removeLoad("fetch_class"))
  } catch (error) {
    alert("Error: "+error)
  }
})

type FetchCurriculumApiPayload = {
  payload: {
    class_id: number
  }
}

export const fetchCurriculumApi = createAsyncThunk("services/curriculum_api", async (_: FetchCurriculumApiPayload, {dispatch}) => {
  try {
    dispatch(classActions.addLoad("fetch_curriculum"))
    dispatch(classActions.addLoad("checking_active_curriculum"))
    const resp = await axios.get("/class/curriculum_using_class", {
      params: {
        ..._.payload
      }
    })
    const data = await resp.data
    dispatch(classActions.setCategories(data.data.categories))
    dispatch(classActions.setCurriculums(data.data.curriculums))
    dispatch(classActions.removeLoad("fetch_curriculum"))
    return data
  } catch (error) {
    return error
  }
})

type OtherMaterialApiPayload = {
  payload: {
    class_id: number
    curriculum_id: number
  }
}
export const fetchOtherMaterialApi = createAsyncThunk("services/other_material", async(_: OtherMaterialApiPayload, {dispatch}) => {
  try {
    dispatch(classActions.addLoad("fetch_other_material"))
    const resp = await axios.get("/class/other_material", {
      params: _.payload
    })
    const data = await resp.data
    dispatch(classActions.setOtherMaterials(data.data.materials))
    dispatch(classActions.removeLoad("fetch_other_material"))
  } catch (error) {
    
  }
})

type ReviewCurriculumApiPayload = {
  payload: {
    curriculum_id: number
  }
}

export const fetchReviewCurriculumApi = createAsyncThunk("services/review_curriculum", async(_: ReviewCurriculumApiPayload, {dispatch}) => {
  try {
    dispatch(classActions.addLoad("fetch_review_curriculum"))
    const resp = await axios.get("/class/review_curriculum", {
      params: _.payload
    })
    const data = await resp.data
    dispatch(classActions.setReviewCurriculums(data.data))
    dispatch(classActions.removeLoad("fetch_review_curriculum"))
  } catch (error) {
    
  }
})