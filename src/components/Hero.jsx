import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import biriyaniImg from '../assets/briyani.png'
import FoodData from "../data/FoodData.js"; // Import your food data
import ScrollAnimation from "./ScrollAnimation.jsx";

const Hero = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [suggestions, setSuggestions] = useState([]);
   const navigate = useNavigate();

   const handleSearchChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      if (value) {
         const filteredSuggestions = FoodData.filter(food =>
            food.name.toLowerCase().includes(value.toLowerCase())
         );
         setSuggestions(filteredSuggestions);
      } else {
         setSuggestions([]);
      }
   };

   const handleSuggestionClick = (suggestion) => {
      setSearchTerm(suggestion.name);
      setSuggestions([]);
      navigate(`/menu?search=${suggestion.name}`);
   };

   return (
      <ScrollAnimation delay={0.2}>
      <div className="relative -mt-8 bg-white lg:w-full overflow-hidden">
         <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
               <div className="flex items-center p-1 space-x-2 bg-gray-100 rounded-full max-w-max">
                  <div className="bg-white rounded-full ">
                     <p className="text-sm font-medium">Let&apos;s eat</p>
                  </div>
                  <p className="text-sm font-medium">
                     Unforgettable experience &rarr;
                  </p>
               </div>
               <h1 className="mt-8 text-3xl font-normal tracking-tight text-black md:text-4xl lg:text-6xl">
                  Order Your
                  <div className="font-serif text-4xl font-bold text-yellow md:text-6xl">
                     {" "}
                     Favourite Food
                  </div>
               </h1>
               <p className="mt-8 text-lg text-gray-700">
               We provide complete catering and event services {" "}
                 for  <span className="font-semibold text-yellow">unforgettable weddings!</span>
               </p>
               <form action="" className="flex items-start mt-8 space-x-2">
                  <div className="relative">
                     <input
                        className="flex w-full px-3 py-2 text-sm bg-transparent border rounded-md border-black/30 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="search"
                        placeholder="Search food"
                        id="search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                     />
                     {suggestions.length > 0 && (
                        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                           {suggestions.map((suggestion) => (
                              <li
                                 key={suggestion.id}
                                 className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                 onClick={() => handleSuggestionClick(suggestion)}
                              >
                                 {suggestion.name}
                              </li>
                           ))}
                        </ul>
                     )}
                     <p className="mt-2 text-sm text-gray-500">
                        We care about your food
                     </p>
                  </div>
                  <div>
                     <button
                        type="button"
                        className="rounded-md bg-yellow px-3 py-2.5 text-sm font-semibold hover:text-white text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={() => navigate(`/menu?search=${searchTerm}`)}
                     >
                        Search
                     </button>
                  </div>
               </form>
            </div>

            <div className="relative px-2 lg:col-span-5 xl:col-span-6 lg:mb-9">
               <img
                  className="bg-gray-50 object-contain md:object-cover lg:aspect-[4/3] lg:h-[530px] xl:aspect-[1/1] lg:mt-14 max-w-full h-auto"
                  src={biriyaniImg}
                  alt=""
               />
            </div>
         </div>
      </div>
      </ScrollAnimation>
   );
};

export default Hero;
