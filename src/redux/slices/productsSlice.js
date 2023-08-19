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
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      const existingCartItem = state.cart.find((item) => item.id === productId);

      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        const product = state.data.find((item) => item.id === productId);
        if (product) {
          state.cart.push({ ...product, quantity: 1 });
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
  extraReducers: {
    [fetchProductsData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { addToCart } = productsSlice.actions;
export default productsSlice.reducer;
