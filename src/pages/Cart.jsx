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

   const handleCheckout = (formData) => {
      dispatch(setOrderDetails(formData));
      navigate('/success');
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
                        className="px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm">
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
                        className="w-full md:w-auto px-6 py-3 bg-yellow text-white rounded-lg"
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
