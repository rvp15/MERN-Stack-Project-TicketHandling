//This slice for All Ticket Handling
import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    tickets: [],
}

export const ticketSlice = createSlice({
    name:'ticket',
    initialState,
    reducers:{
        createticket:(state,action)=>{
state.tickets.push(action.payload)

        },
    
    }
})

export const {createticket} = ticketSlice.actions
export default ticketSlice.reducer