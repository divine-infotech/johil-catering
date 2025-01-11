import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SocialPopup = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsVisible(true);
      }, 2000); // Show after 7 seconds

      return () => clearTimeout(timer);
   }, []);

   const handleClose = () => {
      setIsVisible(false);
   };

   return (
      isVisible && (
         <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.8 }}
               
               className="bg-white border-[2px]  border-pink-600 rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full relative"
                     
          >
               <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-50 pointer-events-auto"
               >
                  <IoMdClose className="w-6 h-6" />
               </button>
               <div className="text-center">
                  <motion.div
                     initial={{ scale: 0 }}
                     animate={{ scale: 1.2 }}
                     transition={{ duration: 0.5, yoyo: Infinity }}
                     className="flex justify-center mb-4"
                  >
                     <FaInstagram className="text-pink-500 text-6xl" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                     Follow Us on Instagram!
                  </h2>
                  <p className="text-gray-600 mb-4">
                     Get more offers and discounts. Be the first to know and avail ASAP!
                  </p>
                  <a
                     href="https://www.instagram.com/yourprofile"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-lg hover:from-pink-600 hover:to-red-600 transition-all"
                  >
                     Follow Now
                  </a>
               </div>
            </motion.div>
         </div>
      )
   );
};

export default SocialPopup; 