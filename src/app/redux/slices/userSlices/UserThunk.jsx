import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get('/api/users');
        console.log(response.data)
        return response.data;

      } catch (error) {
        return rejectWithValue('Failed to fetch users');
      }
    }
  );
  export const addUser = createAsyncThunk(
    'users/addUser',
    async(UserData, {rejectWithValue}) =>{
        try{
            const response = await axios.post('/api/users', UserData);
            console.log(response);
            return response.data;
        }catch(e){
            return rejectWithValue('Failed to add the user')
        }
    }
  );

  export const editUser = createAsyncThunk(
    'users/editUser',
    async({ UserData, id }, {rejectWithValue}) =>{
        try{
            const response = await axios.put(`/api/users/${id}`, UserData);
            console.log(response);
            return response.data;     
        }catch(e){
            return rejectWithValue('Failed to update the user')
        }
    }
  );

  export const getUser = createAsyncThunk(
    'users/getoneUser',
    async(id, {rejectWithValue}) =>{
        try{
            const response = await axios.get(`/api/users/${id}`);
            console.log(response.data.user);
            return response.data.user;
        }catch(e){
            return rejectWithValue('Failed to get the user')
        }
    }
  );

  export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async(id, {rejectWithValue}) =>{
      try{
        const response = await axios.delete(`/api/users/${id}`);
        console.log(response.data)
        return response.data;
      }catch(e){
        return rejectWithValue('Failed to delete the user')
      }
    }
  )