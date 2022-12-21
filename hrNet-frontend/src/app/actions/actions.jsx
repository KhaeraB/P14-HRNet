import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = "http://localhost:3001/api/employees";

// Create an async thunk for fetching data from the database
export const fetchData = createAsyncThunk(
  BASE_URL,
  async () => {
    const response = await axios.get('/api/data');
    return response.data;
  }
);

// Create an async thunk for creating a new entry in the database
export const createData = createAsyncThunk(
 BASE_URL,
  async (data) => {
    const response = await axios.post('/api/data', data);
    return response.data;
  }
);

// Create an async thunk for updating an entry in the database
export const updateData = createAsyncThunk(
  BASE_URL,
  async (data) => {
    const response = await axios.put(`/api/data/${data.id}`, data);
    return response.data;
  }
);

// Create an async thunk for deleting an entry from the database
export const deleteData = createAsyncThunk(
  BASE_URL,
  async (id) => {
    await axios.delete(`/api/data/${id}`);
    return id;
  }
);