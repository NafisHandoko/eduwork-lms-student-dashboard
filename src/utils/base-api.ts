import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query"
import { app } from "../config/app"

export const baseGuestQueryApi = (): {
  baseQuery: ReturnType<typeof fetchBaseQuery>
} => {
  return {
    baseQuery: fetchBaseQuery({
      baseUrl: `${app.APP_URL}/ap/lmsstudentapi/`,
      prepareHeaders: (headers, {getState}) => {
          headers.set('Authorization', 'kH9uzGrt0cOqmZEutZCbjpssKfsXohH9QRd44yUFJr9iiKQjvAETPbkbev6AKkvr')
          return headers
      }
  }),
  }
}

export const baseQueryApi = (path: string): {
  baseQuery: ReturnType<typeof fetchBaseQuery>
} => {
  return {
    baseQuery: fetchBaseQuery({
      baseUrl: `${app.API_URL}/${path}/`,
      prepareHeaders: (headers, {getState}) => {
          headers.set('Authorization', 'kH9uzGrt0cOqmZEutZCbjpssKfsXohH9QRd44yUFJr9iiKQjvAETPbkbev6AKkvr')
          return headers
      }
  }),
  }
}