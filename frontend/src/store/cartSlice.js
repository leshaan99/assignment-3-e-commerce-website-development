import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as cartApi from '../api/cartApi';

// Async thunks for cart operations
export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await cartApi.getCart();
  return response;
});

export const addItemToCart = createAsyncThunk('cart/addItem', async (productId, { rejectWithValue }) => {
  try {
    const response = await cartApi.addToCart(productId);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
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
  reducers: {
    // Clear cart (used on logout)
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.error = null;
    },
  },
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
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add item
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.total = action.payload.total;
        state.error = null;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Remove item
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.total = action.payload.total;
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
