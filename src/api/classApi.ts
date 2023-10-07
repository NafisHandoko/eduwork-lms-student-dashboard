import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const classApi = createApi({
    reducerPath: 'classApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://lmsapistudent.edudev.xyz/class/',
        prepareHeaders: (headers) => {
            headers.set('Authorization', 'kH9uzGrt0cOqmZEutZCbjpssKfsXohH9QRd44yUFJr9iiKQjvAETPbkbev6AKkvr')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getAllClasses: builder.query<any, void>({
            query: () => `all`
        }),
        getClassesCurriculum: builder.query({
            query: (classId) => `curriculum_using_class?class_id=${classId}`
        }),
    })
})

export const {
    useGetAllClassesQuery, useGetClassesCurriculumQuery
} = classApi