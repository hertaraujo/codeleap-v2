import { createSlice } from '@reduxjs/toolkit';
import { PostType } from '@/types';
import { fetchPosts } from '@/actions/posts';
import { PaginatedResponseData } from '@/services/types';
import { RequestStatus } from '@/redux/types';

type InitialState = {
  data: PaginatedResponseData<PostType>;
  status: RequestStatus;
  error?: string;
};

const initialState: InitialState = {
  data: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  status: 'idle',
  error: undefined,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const postsReducer = postsSlice.reducer;
