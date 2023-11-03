import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewproduct: [],
  loading: false,
  error: false,
  idproduct:{},
};
const viewproduct_url = "https://crossbody-backend.onrender.com/user/user-productdetails"; //backend run akathem datas kittum bcoz renderilk node push cheythond


export const userproduct = createAsyncThunk("viewproduct", async () => {
  const response = await fetch(viewproduct_url);
  return response.json();
});

export const productSingleView = createAsyncThunk("idproduct",async (id)=>{
  const response = await fetch(`https://crossbody-backend.onrender.com/user/user-productdetails/${id}`)
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
    builder.addCase(productSingleView.rejected, (state) => {
      //action.type
      state.loading = false;
      state.error = true;
    
    });
  },
});
//


export default productslice.reducer;
