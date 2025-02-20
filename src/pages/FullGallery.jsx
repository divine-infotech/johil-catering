import React from "react";
import Navbar from "../components/Navbar";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.webp";
import img5 from '../assets/img5.webp'


const FullGallery = () => {
   const images = [
      img5,
      img4,
        img1,
       img2,
       img3
   ];

   return (
    <>
    <Navbar/>
      <div className="py-10 bg-gray-100">
         <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
            {images.map((image, index) => (
               <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                  <img
                     src={image}
                     alt={`Gallery image ${index + 1}`}
                     className="w-full h-64 object-fill hover:scale-105 transition-transform duration-300"
                  />
               </div>
            ))}
         </div>
      </div>
      </>
   );
};

export default FullGallery; 