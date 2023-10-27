import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  registration: [],
  loading:false,
  error: "",
};

export const registerPost = createAsyncThunk(
  "registerPost",
  async (Registerobj) => {
    const response = await axios.post("http://localhost:5000/", Registerobj);
    
    console.log(response);
    return response.data;
  }
);
const registerslice = createSlice({
  name: "register",
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerPost.fulfilled, (state, action) => {
      state.loading = false;
      state.registration = action.payload;
    });
    builder.addCase(registerPost.rejected, (state, action) => {
      state.registration = action.payload;
      state.loading = false;
      state.error = true;
    });
  },
});
export default registerslice.reducer;
