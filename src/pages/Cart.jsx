import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector, useDispatch } from "react-redux";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartItems from "../components/CartItems";
import CheckoutForm from '../components/CheckoutForm';
import { setOrderDetails } from '../redux/slices/OrderSlice';

const Cart = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const cartItems = useSelector((state) => state.cart.cart);
   const [showCheckout, setShowCheckout] = useState(false);

   // Calculate Total Price
   const totalPrice = cartItems.reduce(
      (total, item) => total + item.qty * item.price,
      0
   );

   const handleCheckout = async (formData) => {
      try {
         // Format order details as a string
         const orderDetailsString = cartItems.map(item => 
            `${item.name} x ${item.qty} - ₹${item.price * item.qty}`
         ).join('\n');

         // Prepare order details
         const orderDetails = {
            ...formData,
            order: orderDetailsString,
            total: `₹${totalPrice}`
         };

         // Send data to Web3Forms
         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify({
               access_key: "5203fa70-07f3-4c97-9ede-b414c14b7e68",
               ...orderDetails
            })
         });

         if (response.ok) {
            dispatch(setOrderDetails(orderDetails));
            navigate('/success');
         } else {
            console.error("Failed to send order details");
         }
      } catch (error) {
         console.error("Error during checkout:", error);
      }
   };

   return (
      <>
         <Navbar />

         <div className="flex flex-col max-w-3xl mx-auto space-y-4 sm:p-10 sm:px-2">
            <div className="px-4 md:px-8">
               <h2 className="text-3xl font-bold ">Your cart</h2>
               <p className="mt-3 text-sm font-medium text-gray-700 ">
                  Add your items in a cart and Order it
               </p>
            </div>

            {/* Cart Items */}
            <div className="">
               <Scrollbars style={{ height: 350 }}>
                  {cartItems.length > 0 ? (
                     cartItems.map((food) => {
                        return (
                           <CartItems
                              key={food.id}
                              id={food.id}
                              name={food.name}
                              price={food.price}
                              img={food.img}
                              rating={food.rating}
                              qty={food.qty}
                           />
                        );
                     })
                  ) : (
                     // If Your Cart is empty
                     <h1 className="flex justify-center text-3xl font-bold">
                        Your cart is empty!
                     </h1>
                  )}
               </Scrollbars>
            </div>

            <div className="px-4 md:px-8">
               {/* Total Price */}
               <div className="space-y-1 text-right md:my-2">
                  <p>
                     Total amount:
                     <span className="font-semibold"> ₹{totalPrice}</span>
                  </p>
               </div>
               <div className="flex justify-end space-x-4">
                  <Link to={"/menu"}>
                     <button
                        type="button"
                        className="px-3  py-3 text-sm font-semibold text-black border border-black rounded-md shadow-sm">
                        Back to shop
                     </button>
                  </Link>
                  {showCheckout ? (
                     <CheckoutForm 
                        onSubmit={handleCheckout} 
                        cartTotal={totalPrice}
                        onClose={() => setShowCheckout(false)}
                     />
                  ) : (
                     <button 
                        onClick={() => setShowCheckout(true)}
                        className=" md:w-auto px-2 md:px-6 py-3 bg-yellow text-white rounded-lg"
                     >
                        Proceed to Checkout
                     </button>
                  )}
               </div>
            </div>
         </div>

         <Footer />
      </>
   );
};
export default Cart;
