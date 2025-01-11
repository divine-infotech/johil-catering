import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { MdRecommend } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQty, decrementQty } from "../redux/slices/CartSlice";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const FoodCard = ({ id, name, price, desc, img, rating, serves, items, recommended, handleToast }) => {
   const dispatch = useDispatch();
   const cartItems = useSelector((state) => state.cart.cart);
   const [showSuccessModal, setShowSuccessModal] = useState(false);

   // Find if item exists in cart
   const cartItem = cartItems.find(item => item.id === id);

   const handleAddToCart = () => {
      dispatch(addToCart({
         id,
         name,
         price,
         img,
         rating,
         qty: 1
      }));
      handleToast(name);
      setShowSuccessModal(true);
   };

   return (
      <>
         <div className="w-[300px] bg-white p-5 flex flex-col rounded-2xl gap-3 shadow-xl hover:shadow-2xl transition-all">
            <div className="relative">
               <img
                  src={img}
                  alt={name}
                  className="w-full h-[200px] object-cover rounded-xl hover:scale-105 transition-all duration-500"
               />
               {serves && (
                  <div className="absolute top-2 right-2 bg-yellow text-white px-2 py-1 rounded-full flex items-center">
                     <BsPeople className="mr-1" /> Serves {serves}
                  </div>
               )}
               {recommended && (
                  <div className="absolute top-2 left-2 bg-yellow text-black px-3 py-1 rounded-full flex items-center gap-2 shadow-md transform hover:scale-105 transition-all">
                     <MdRecommend className="text-lg" />
                     <span className="font-medium text-xs sm:text-sm leading-tight">Recommended</span>
                  </div>
               )}

            </div>

            <div className="flex justify-between items-center">
               <h2 className="text-xl font-bold text-gray-800">{name}</h2>
               <span className="text-2xl font-bold text-yellow">₹{price}</span>
            </div>

            {items ? (
               <ul className="text-sm text-gray-600 list-disc pl-4">
                  {items.map((item, index) => (
                     <li key={index}>{item}</li>
                  ))}
               </ul>
            ) : (
               <p className="text-sm text-gray-600">{desc}</p>
            )}

            <div className="flex justify-between items-center mt-auto">
               <span className="flex items-center text-sm">
                  <AiFillStar className="text-yellow mr-1" /> {rating}
               </span>

               {cartItem ? (
                  <div className="flex items-center gap-2">
                     <button
                        onClick={() => dispatch(decrementQty({ id }))}
                        className="w-8 h-8 rounded-full bg-gray flex items-center justify-center hover:bg-yellow hover:text-white transition-all"
                     >
                        -
                     </button>
                     <span className="font-semibold text-lg">{cartItem.qty}</span>
                     <button
                        onClick={() => dispatch(incrementQty({ id }))}
                        className="w-8 h-8 rounded-full bg-gray flex items-center justify-center hover:bg-yellow hover:text-white transition-all"
                     >
                        +
                     </button>
                  </div>
               ) : (
                  <button
                     onClick={handleAddToCart}
                     className="px-4 py-2 flex justify-center items-center gap-2 bg-yellow text-white rounded-lg hover:bg-yellow-600 transition-all"
                  >
                     <FaShoppingCart />
                     Order Now
                  </button>
               )}
            </div>
         </div>

         {/* Success Modal */}
         {showSuccessModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
               <div className="bg-white p-6 rounded-xl shadow-2xl transform transition-all duration-300 ease-in-out animate-modal-pop max-w-sm w-11/12">
                  <div className="text-center">
                     <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                     </div>
                     <h3 className="text-xl font-bold mb-2">Added to Cart!</h3>
                     <p className="text-gray-600 mb-6"><span className="font-semibold text-red-500">{name}</span> has been added to your cart</p>
                     <div className="flex gap-2 justify-center">
                        <Link
                           to="/cart"
                           className="px-3 md:px-6 py-2 flex justify-center items-center gap-1 bg-green-500 text-sm text-white rounded-lg hover:bg-yellow-600 transition-all"
                        >
                           <FaShoppingCart />  Go to Cart
                        </Link>
                        <button
                           onClick={() => setShowSuccessModal(false)}
                           className="px-3 md:px-6 py-2 border text-sm border-green-500 text-green-600 rounded-lg hover:bg-green-500 hover:text-white transition-all"
                        >
                           Continue Shopping
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default FoodCard;
