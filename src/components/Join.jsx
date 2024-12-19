import React from "react";
import { Link } from "react-router-dom";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.avif";

const Join = () => {
   return (
      <div className="flex w-full items-center justify-center bg-yellow">
         <section className="py-10 lg:py-20 flex flex-col justify-center w-full">
            <div className="mx-auto max-w-7xl">
               <div className="max-w-2xl mx-auto text-center">
                  <div className="flex justify-center -space-x-2 isolate">
                     <img
                        className="relative z-30 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg"
                        alt="Dan_Abromov"
                     />
                     <img
                        className="relative z-20 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src={avatar1}
                        alt="Guillermo_Rauch"
                     />
                     <img
                        className="relative z-10 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src={avatar2}
                        alt="Lee_Robinson"
                     />
                     <img
                        className="relative z-0 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
                        alt="Delba"
                     />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold leading-tight text-black sm:text-4xl lg:mt-8 lg:text-5xl">
                     Join <span className="border-b-8 border-white">1,482</span> other Fooders
                  </h2>
                  <p className="px-6 mt-4 text-base text-gray-600 md:max-w-xl md:mx-auto lg:mt-6 lg:text-xl">
                     Indulge in a world of flavors. Join us at{" "}
                     <span className="text-white">Johil</span> and savor the beauty of delicious moments. 
                     Culinary joy awaits – sign up today!
                  </p>
                  <div className="mt-6">
                     <Link
                        to={"/signIn"}
                        type="button"
                        className="px-6 py-3 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Join Now
                     </Link>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Join;
