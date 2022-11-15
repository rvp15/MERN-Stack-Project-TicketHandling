//This slice is for Register,Login,Logout

import { createSlice } from "@reduxjs/toolkit";
// import {authService} from './authService'

//Get user from local storage
const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));
// const admin = JSON.parse(localStorage.getItem("admin"));

const initialState = {
  user: user ? user : null, // if there is user in local storage use it else null
  token: token ? token : null,
  isadmin: false,
  // admin: admin? admin : null
};
//Register User:

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setuser: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
      localStorage.setItem("user", JSON.stringify(state.user));
   
    },
    settoken:(state,action)=>{
      state.token = action.payload.token; 
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    logoutuser: (state, action) => {
      console.log(action.payload);
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    setisAdmin:(state,action)=>{
      state.isadmin = true
      
      state.token = action.payload.token; 
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", JSON.stringify(state.token));
    }
  },
});
export const { reset, setuser, settoken, logoutuser,setisAdmin } = authSlice.actions;
export default authSlice.reducer;
