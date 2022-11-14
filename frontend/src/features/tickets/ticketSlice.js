//This slice for All Ticket Handling
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    createticket: (state, action) => {
      state.tickets.push(action.payload);
    },
    alltickets:(state,action)=>{
state.tickets=action.payload
    }
  },
});

export const { createticket,alltickets } = ticketSlice.actions;
export default ticketSlice.reducer;
