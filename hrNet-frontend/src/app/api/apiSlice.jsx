import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


/**
 * Description : Api 
 * @param {any} {baseQuery:fetchBaseQuery({baseUrl:'https://p14-hrnet-api.herokuapp.com/'}
 * @returns {any}
 */
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://p14-hrnet-api.herokuapp.com/'}), 
    tagTypes: ['Employees', 'States', 'Departments'], 
    endpoints: builder =>({})
})

