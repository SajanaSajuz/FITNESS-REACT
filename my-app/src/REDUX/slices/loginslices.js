import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  login:[],
};


export const logPosts = createAsyncThunk("login", async (logobj) => {
  const response = await axios.post(`http://localhost:5000/log`,logobj);
    console.log(response);
  return response;
});
const loginslice = createSlice({
  name: "loguser",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(logPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.login = action.payload.data;
      localStorage.setItem('token',action.payload.data.token)
      localStorage.setItem('Role',action.payload.data.role)
    });
    builder.addCase(logPosts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export default loginslice.reducer;
