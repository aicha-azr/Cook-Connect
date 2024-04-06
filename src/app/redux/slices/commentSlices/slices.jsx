const { createSlice } = require('@reduxjs/toolkit');
const { fetchAllComment, addComment, editComment, getComment, deleteComment } = require('./CommentThunk');


const initialState = {
  data: [],
  comment: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllComment.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); 
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editComment.fulfilled, (state, action) => {
        state.loading = false;
        const updatedComment = action.payload;
        const index = state.data.findIndex((Comment) => Comment._id === updatedComment._id);
        if (index !== -1) {
          state.data[index] = updatedComment;
        }
      })
      .addCase(editComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comment = action.payload; 
      })
      .addCase(getComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        const deletedComment = action.payload;
        const index = state.data.findIndex((Comment) => Comment._id === deletedComment._id);
        if (index !== -1) {
          state.data.splice(index, 1); 
        }
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

module.exports = {
  commentsReducer: commentsSlice.reducer,
};
