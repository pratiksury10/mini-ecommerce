import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch all products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
});

// Async thunk to fetch categories
export const fetchCategories = createAsyncThunk("products/fetchCategories", async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) throw new Error("Failed to fetch categories");
  return await res.json();
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    categories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Fetch categories
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export default productSlice.reducer;
