import { configureStore} from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
// import rootReducer from '../features/authSlice'

/**
 * Description
 * @param {any} {reducer:{[apiSlice.reducerPath]:apiSlice.reducer
 * @param {any} }
 * @param {getDefaultMiddleware=>getDefaultMiddleware()} middleware
 * @returns {any}
 */
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, 
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(apiSlice.middleware), 
  devTools: true
});

export default store