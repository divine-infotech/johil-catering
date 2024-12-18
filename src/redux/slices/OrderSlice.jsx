import { createSlice } from "@reduxjs/toolkit";

const OrderSlice = createSlice({
   name: "order",
   initialState: {
      details: null,
   },
   reducers: {
      setOrderDetails: (state, action) => {
         state.details = action.payload;
      },
      clearOrderDetails: (state) => {
         state.details = null;
      },
   },
});

export const { setOrderDetails, clearOrderDetails } = OrderSlice.actions;
export default OrderSlice.reducer; 