import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductsData = createAsyncThunk('products', async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [fetchProductsData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export default productsSlice.reducer;
