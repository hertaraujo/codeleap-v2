import { api } from '@/services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  console.log('is it being done?');
  const { data } = await api.get('');
  console.log('data: ', data);
  return data;
});

export { fetchPosts };
