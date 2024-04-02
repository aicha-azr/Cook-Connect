import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllPosts = createAsyncThunk(
    'posts/fetchAll',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get('/api/posts');
        console.log(response.data)
        return response.data;

      } catch (error) {
        return rejectWithValue('Failed to fetch posts');
      }
    }
  );
  export const addPost = createAsyncThunk(
    'posts/addPost',
    async(PostData, {rejectWithValue}) =>{
        try{
            const response = await axios.post('/api/posts', PostData);
            console.log(response);
            return response.data;
        }catch(e){
            return rejectWithValue('Failed to add the post')
        }
    }
  );

  export const editPost = createAsyncThunk(
    'posts/editPost',
    async({ postData, id }, {rejectWithValue}) =>{
        try{
            const response = await axios.put(`/api/posts/${id}`, postData);
            console.log(response);
            return response.data;     
        }catch(e){
            return rejectWithValue('Failed to update the post')
        }
    }
  );

  export const getPost = createAsyncThunk(
    'posts/getonePost',
    async(id, {rejectWithValue}) =>{
        try{
            const response = await axios.get(`/api/posts/${id}`);
            console.log(response.data.post);
            return response.data.post;
        }catch(e){
            return rejectWithValue('Failed to get the post')
        }
    }
  );

  export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async(id, {rejectWithValue}) =>{
      try{
        const response = await axios.delete(`/api/posts/${id}`);
        console.log(response.data)
        return response.data;
      }catch(e){
        return rejectWithValue('Failed to delete the post')
      }
    }
  )