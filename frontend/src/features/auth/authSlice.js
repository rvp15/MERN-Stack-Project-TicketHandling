//This slice is for Register,Login,Logout

import { createSlice } from "@reduxjs/toolkit";
// import {authService} from './authService'

//Get user from local storage
const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  user: user ? user : null, // if there is user in local storage use it else null
};
//Register User:

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setuser: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
      console.log(state.user);
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    logoutuser: (state, action) => {
      console.log(action.payload);
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});
export const { reset, setuser, settoken, logoutuser } = authSlice.actions;
export default authSlice.reducer;
