const { createSlice } = require('@reduxjs/toolkit');
const { fetchAllUsers, addUser, editUser, getUser, deleteUser } = require('./UserThunk');


const initialState = {
  data: [],
  user: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); 
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        const updatedPost = action.payload;
        const index = state.data.findIndex((post) => post._id === updatedPost._id);
        if (index !== -1) {
          state.data[index] = updatedPost;
        }
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; 
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const deletedUser = action.payload;
        const index = state.data.findIndex((user) => user._id === deletedUser._id);
        if (index !== -1) {
          state.data.splice(index, 1); 
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

module.exports = {
  usersReducer: usersSlice.reducer,
};
