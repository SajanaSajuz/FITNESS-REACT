import loginReducer from "../slices/loginslices";
import productuserReducer from "../slices/productslices";
import registerReducer from "../slices/registerslices";
import trainerReducer from "../slices/trainerslices";
import  userviewReducer from "../slices/userslices";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
      userview:userviewReducer,
      productuser:productuserReducer,
      trainer:trainerReducer,
      register:registerReducer,
      loguser:loginReducer,
    },
  })
