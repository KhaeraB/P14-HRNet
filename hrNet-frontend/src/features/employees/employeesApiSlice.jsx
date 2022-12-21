import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const employeesAdapter = createEntityAdapter({});

const initialState = employeesAdapter.getInitialState();

export const employeesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => "/api/employees",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const loadedUsers = responseData.map((employee) => {
          employee.id = employee._id;
          return employee;
        });
        return employeesAdapter.setAll(initialState, loadedUsers);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Employees", id: "LIST" },
            ...result.ids.map((id) => ({ type: "employees", id })),
          ];
        } else return [{ type: "Employees", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetEmployeesQuery } = employeesApiSlice;

// returns the query result object
export const selectEmployeesResult = employeesApiSlice.endpoints.getEmployees.select();

// creates memoized selector
const selectEmployeesData = createSelector(
  selectEmployeesResult,
  (employeesResult) => employeesResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllEmployees,
  selectById: selectEmployeeById,
  selectIds: selectEmployeeIds,
  // Pass in a selector that returns the users slice of state
} = employeesAdapter.getSelectors(
  (state) => selectEmployeesData(state) ?? initialState
);
