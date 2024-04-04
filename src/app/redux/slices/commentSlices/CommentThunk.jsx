import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllComment = createAsyncThunk(
    'comments/fetchAll',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get('/api/comment');
        console.log(response.data)
        return response.data;

      } catch (error) {
        return rejectWithValue('Failed to fetch comments');
      }
    }
  );
  export const addComment = createAsyncThunk(
    'comments/addComment',
    async(Data, {rejectWithValue}) =>{
        try{
            const response = await axios.post('/api/comments', Data);
            console.log(response);
            return response.data;
        }catch(e){
            return rejectWithValue('Failed to add the comment')
        }
    }
  );

  export const editComment = createAsyncThunk(
    'comments/editComment',
    async({ Data, id }, {rejectWithValue}) =>{
        try{
            const response = await axios.put(`/api/comments/${id}`, Data);
            console.log(response);
            return response.data;     
        }catch(e){
            return rejectWithValue('Failed to update the comment')
        }
    }
  );

  export const getComment = createAsyncThunk(
    'comments/getoneComment',
    async(id, {rejectWithValue}) =>{
        try{
            const response = await axios.get(`/api/comments/${id}`);
            console.log(response.data.post);
            return response.data.post;
        }catch(e){
            return rejectWithValue('Failed to get the comment')
        }
    }
  );

  export const deleteComment = createAsyncThunk(
    'comments/deleteComment',
    async(id, {rejectWithValue}) =>{
      try{
        const response = await axios.delete(`/api/comments/${id}`);
        console.log(response.data)
        return response.data;
      }catch(e){
        return rejectWithValue('Failed to delete the comment')
      }
    }
  )