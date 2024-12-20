import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.webp";


const Gallery = () => {
   const images = [
    img4,
      img1,
     img2,
     img3
   ];

   // Show only a few images on the home page
   const previewImages = images.slice(0, 3);

   return (
    <ScrollAnimation delay={0.2}>
      <div className="py-10 bg-gray-100">
         <h2 className="text-3xl font-bold text-center mb-8 underline underline-offset-4 decoration-purple-700">Gallery of Johil !!</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
            {previewImages.map((image, index) => (
               <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                  <img
                     src={image}
                     alt={`Gallery image ${index + 1}`}
                     className="w-full h-64 object-fill hover:scale-105 transition-transform duration-300"
                  />
               </div>
            ))}
         </div>
         <div className="text-center mt-8">
            <Link to="/gallery" className="px-4 py-2 bg-transparent border border-purple-600 hover:bg-purple-600 text-purple-600 hover:text-white rounded-lg hover:bg-yellow-600 transition-all">
               See More
            </Link>
         </div>
      </div>
      </ScrollAnimation>
   );
};

export default Gallery; 