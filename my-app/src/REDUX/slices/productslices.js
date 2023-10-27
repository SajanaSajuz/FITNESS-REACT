import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewproduct: [],
  loading: false,
  error: false,
  idproduct:[],
};
const viewproduct_url = "http://localhost:5000/user/user-productdetails";


export const userproduct = createAsyncThunk("viewproduct", async () => {
  const response = await fetch(viewproduct_url);
  return response.json();
});

export const productSingleView = createAsyncThunk("idproduct",async (id)=>{
  const response = await fetch(`http://localhost:5000/user/user-productdetails/${id}`)
  return response.json()
  })

const productslice = createSlice({
  name: "productuser",
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userproduct.pending, (state) => {
      //action.type
      state.loading = true;
    });
    builder.addCase(userproduct.fulfilled, (state, action) => {
      //action.type
      state.loading = false;
      state.viewproduct = action.payload.product_details;
    });
    builder.addCase(userproduct.rejected, (state) => {
      //action.type
      state.loading = false;
      state.error = true;
    });
    builder.addCase(productSingleView.fulfilled, (state, action) => {
      //action.type
      state.loading = false;
      state.idproduct = action.payload.product_details;
    });
  },
});
//


export default productslice.reducer;
