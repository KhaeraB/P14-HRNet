import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const statesAdapter = createEntityAdapter({});

const initialState = statesAdapter.getInitialState();

export const statesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStates: builder.query({
      query: () => "/api/states",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const loadedStates = responseData.map((one) => {
          one.id = one._id;
          return one;
        });
        return statesAdapter.setAll(initialState, loadedStates);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "States", id: "LIST" },
            ...result.ids.map((id) => ({ type: "States", id })),
          ];
        } else return [{ type: "States", id: "LIST" }];
      }
    }),
  }),
});

export const {
  useGetStatesQuery
} = statesApiSlice;

// returns the query result object
export const selectStatesResult =
statesApiSlice.endpoints.getStates.select();

// creates memoized selector
const selectStatesData = createSelector(
  selectStatesResult,
  (statesResult) => statesResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllStates,
  selectById: selectStateById,
  selectIds: selectStatesIds,
  // Pass in a selector that returns the users slice of state
} = statesAdapter.getSelectors(
  (state) => selectStatesData(state) ?? initialState
);
