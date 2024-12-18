import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './slices/OrderSlice';
import cartReducer from './slices/CartSlice';

const store = configureStore({
   reducer: {
      order: orderReducer,
      cart: cartReducer,
   },
});

export default store;
 