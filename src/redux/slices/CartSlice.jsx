import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
   name: "cart",
   initialState: {
      cart: [],
   },
   reducers: {
      // Add to Cart
      addToCart: (state, action) => {
         const existingItem = state.cart.find(
            (item) => item.id === action.payload.id
         );

         if (existingItem) {
            state.cart = state.cart.map((item) =>
               item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
            );
         } else {
            // Make sure all required fields are included
            state.cart.push({
               id: action.payload.id,
               name: action.payload.name,
               price: action.payload.price,
               img: action.payload.img,
               qty: 1,
               rating: action.payload.rating
            });
         }
      },

      // Remove from Cart
      removeFromCart: (state, action) => {
         state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
         );
      },

      // Decrement items from Cart
      decrementQty: (state, action) => {
         const item = state.cart.find((item) => item.id === action.payload.id);
         if (item.qty === 1) {
            // Remove item if quantity becomes 0
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
         } else {
            state.cart = state.cart.map((item) =>
               item.id === action.payload.id
                  ? { ...item, qty: item.qty - 1 }
                  : item
            );
         }
      },

      // Increment items in Cart
      incrementQty: (state, action) => {
         state.cart = state.cart.map((item) =>
            item.id === action.payload.id
               ? { ...item, qty: item.qty + 1 }
               : item
         );
      },

      // Clear Cart
      clearCart: (state) => {
         state.cart = [];
      },
   },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart } =
   CartSlice.actions;

export default CartSlice.reducer;
