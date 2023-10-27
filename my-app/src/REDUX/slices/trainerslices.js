import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  trainerview: [],
  classview: [],
  loading: false,
  error: false,
};
const trainer_url = "http://localhost:5000/trainer/trainerdetails";
const class_url = "http://localhost:5000/trainer/classdetails";

export const trainer = createAsyncThunk("trainerview", async () => {
  const response = await fetch(trainer_url);
  return response.json();
});

export const classes = createAsyncThunk("classview", async () => {
  const response = await fetch(class_url);
  return response.json();
});

const trainerslice = createSlice({
  name: "trainer",
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase(trainer.pending, (state) => {
      //action.type
      state.loading = true;
    });
    builder.addCase(trainer.fulfilled, (state, action) => {
      //action.type
      state.loading = false;
      state.trainerview = action.payload.trainer_details;
    });
    builder.addCase(trainer.rejected, (state) => {
      //action.type
      state.loading = false;
      state.error = true;
    });
    builder.addCase(classes.fulfilled, (state, action) => {
      //action.type
      state.loading = false;
      state.classview = action.payload.class_details;
    });
    builder.addCase(classes.rejected, (state) => {
      //action.type
      state.loading = false;
      state.error = true;
    });
    builder.addCase(classes.pending, (state) => {
      //action.type
      state.loading = true;
    });
  },
});
//

export default trainerslice.reducer;
