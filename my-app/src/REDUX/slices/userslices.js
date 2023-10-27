import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  //STATE
  viewusertrainer: [],
  loading:false,
  error:false,
  idtrainer:{},

};
const viewtrainer_url = "http://localhost:5000/user/user-trainerdetails";
export const usertrainer = createAsyncThunk("viewusertrainer", async () => {
  //to call api's
  const response = await fetch(viewtrainer_url);
  return response.json();
});
export const trainerSingleView = createAsyncThunk("idtrainer",async (id)=>{
  console.log(id);
  const response = await fetch(`http://localhost:5000/user/user-trainerdetails/${id}`)
console.log(response );
  return response.json()
  })

 const userslice = createSlice({
  name: "userview", 
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase(usertrainer.pending, (state) => {
      //action.type
      state.loading =true;
    });
    builder.addCase(usertrainer.fulfilled, (state, action) => {
      //action.type
      state.loading =false;
      state.viewusertrainer = action.payload.trainer_details;
    });
    builder.addCase(usertrainer.rejected, (state) => {
      //action.type
      state.loading =false;
      state.error =true;
    });
    builder.addCase(trainerSingleView.rejected, (state,action) => {
      //action.type
      state.loading =false;
      console.log(action.payload);
      state.error =true;
    });
    builder.addCase(trainerSingleView.fulfilled, (state, action) => {
      //action.type
      state.loading = false;
      state.idtrainer = action.payload.trainer_details
    });
  },
});

export default userslice.reducer;
