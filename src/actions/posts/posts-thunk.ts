import { api } from '@/services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await api.get('');
  return data;
});

export { fetchPosts };
