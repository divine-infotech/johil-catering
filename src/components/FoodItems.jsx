import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";

const FoodItems = () => {
   const [selectedCategory, setSelectedCategory] = useState("all");
   const [filteredFood, setFilteredFood] = useState(FoodData);
   const location = useLocation();

   useEffect(() => {
      const query = new URLSearchParams(location.search);
      const search = query.get("search");
      if (search) {
         const filtered = FoodData.filter(food =>
            food.name.toLowerCase().includes(search.toLowerCase())
         );
         setFilteredFood(filtered);
      } else {
         setFilteredFood(FoodData);
      }
   }, [location.search]);

   const handleToast = (name) => toast.success(`Added ${name} to cart`);

   const categories = ["all", ...new Set(FoodData.map(item => item.category))];

   return (
      <>
         <Toaster position="top-center" reverseOrder={false} />
         <div className="py-10 bg-gray-50">
            <div className="text-center mb-10">
               <h1 className="text-4xl font-bold mb-4">
                  Johil <span className="text-yellow">Special</span> Bucket Biryani
               </h1>
               <div className="flex justify-center gap-4 mt-6">
                  {categories.map(category => (
                     <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full capitalize ${
                           selectedCategory === category 
                              ? "bg-yellow text-white" 
                              : "bg-gray-200 text-gray-800"
                        }`}
                     >
                        {category}
                     </button>
                  ))}
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 px-4">
               {filteredFood.map((food) => (
                  <FoodCard
                     key={food.id}
                     {...food}
                     handleToast={handleToast}
                  />
               ))}   
            </div>
         </div>
      </>
   );
};

export default FoodItems;
