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

  const cacheDuration = 24 * 60 * 60 * 1000; // 5 minutes

  const userCache = {};
  
  export const getUser = createAsyncThunk(
      'users/getoneUser',
      async (id, { rejectWithValue }) => {
          const cachedUser = userCache[id];
          
          if (cachedUser && (Date.now() - cachedUser.timestamp < cacheDuration)) {
              return cachedUser.user; // Retourne l'utilisateur du cache s'il est encore valide
          }
  
          try {
              const response = await axios.get(`/api/users/${id}`);
              const user = response.data.user;
              userCache[id] = { user, timestamp: Date.now() }; // Mémorise avec un timestamp
              console.log(user);
              return user;
          } catch (e) {
              return rejectWithValue('Failed to get the user');
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