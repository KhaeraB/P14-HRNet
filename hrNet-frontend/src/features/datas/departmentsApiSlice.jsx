import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const departmentsAdapter = createEntityAdapter({});

const initialState = departmentsAdapter.getInitialState();

/**
 * Description : Data for Select Department en Form
 * @param {(builder)} {endpoints}
 * @returns {any}
 */
export const departmentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => "/api/departments",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const loadedDepartments = responseData.map((one) => {
          one.id = one._id;
          return one;
        });
        return departmentsAdapter.setAll(initialState, loadedDepartments);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Departments", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Departments", id })),
          ];
        } else return [{ type: "Departments", id: "LIST" }];
      }
    }),
  }),
});

export const {
  useGetDepartmentsQuery
} = departmentsApiSlice;

// returns the query result object
export const selectDepartmentsResult =
departmentsApiSlice.endpoints.getDepartments.select();

// creates memoized selector
const selectDepartmentsData = createSelector(
  selectDepartmentsResult,
  (departmentsResult) => departmentsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllDepartments
  // Pass in a selector that returns the users slice of state
} = departmentsAdapter.getSelectors(
  (state) => selectDepartmentsData(state) ?? initialState
);
