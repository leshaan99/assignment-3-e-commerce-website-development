import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as cartApi from '../api/cartApi';

// Async thunks for cart operations
export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await cartApi.getCart();
  return response;
});

export const addItemToCart = createAsyncThunk('cart/addItem', async (productId) => {
  const response = await cartApi.addToCart(productId);
  return response;
});

export const removeItemFromCart = createAsyncThunk('cart/removeItem', async (productId) => {
  const response = await cartApi.removeFromCart(productId);
  return response;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch cart
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add item
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      // Remove item
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.total = action.payload.total;
      });
  },
});

export default cartSlice.reducer;
