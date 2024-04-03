const { configureStore, createSlice } = require('@reduxjs/toolkit');
const { useDispatch } = require('react-redux');
const { postsReducer } = require('../slices/postSlices/slices');

const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
});

// Exporting AppDispatch using createSlice
const appSlice = createSlice({
    name: 'app',
    initialState: {},
    reducers: {}
});

export const { dispatch: AppDispatch } = store;
export const useAppDispatch = () => useDispatch();

export default store;
