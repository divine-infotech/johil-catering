import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { BsFillPlayFill, BsAward } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

import { MdEventAvailable } from "react-icons/md";
import video from "../assets/reel.mp4";

const VideoSection = () => {
   const [isMuted, setIsMuted] = useState(true);
   const videoRef = useRef(null);
   const sectionRef = useRef(null);

   useEffect(() => {
      const options = {
         root: null,
         rootMargin: '0px',
         threshold: 0.5
      };

      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               videoRef.current.play();
            } else {
               videoRef.current.pause();
            }
         });
      }, options);

      if (sectionRef.current) {
         observer.observe(sectionRef.current);
      }

      return () => {
         if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
         }
      };
   }, []);

   const toggleMute = () => {
      setIsMuted(!isMuted);
      videoRef.current.muted = !isMuted;
   };

   const features = [
      {
         icon: <BsAward className="text-yellow text-2xl" />,
         text: "Premium Quality"
      },
      {
         icon: <RiCustomerService2Fill className="text-yellow text-2xl" />,
         text: "24/7 Support"
      },
      {
         icon: <MdEventAvailable className="text-yellow text-2xl" />,
         text: "Event Planning"
      }
   ];

   return (
      <motion.div
         ref={sectionRef}
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-white to-gray-50 py-16 px-4 md:px-10"
      >
         <motion.div 
            className="w-full md:w-1/2 mb-6 md:mb-0 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
         >
            <div className="aspect-[9/16] max-w-[400px] mx-auto relative">
               <div className="absolute inset-0 bg-yellow/10 rounded-2xl -rotate-6 transform"></div>
               <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10"
                  autoPlay
                  loop
                  muted
                  playsInline
               >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
               <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-20"
               >
                  {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
               </button>
               <div className="absolute top-4 left-4 bg-yellow text-white px-3 py-1 rounded-full flex items-center gap-2 z-20">
                  <BsFillPlayFill size={20} />
                  <span className="text-sm font-medium">Watch Now</span>
               </div>
            </div>
         </motion.div>

         <motion.div 
            className="w-full md:w-1/2 md:pl-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
         >
            <div className="space-y-6">
               <motion.h2 
                  className="text-4xl font-bold text-gray-800 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
               >
                  Experience the Magic of
                  <span className="text-yellow block mt-2">Johil Catering & Events</span>
               </motion.h2>

               <motion.p 
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
               >
                  Transform your special moments into unforgettable memories with our expert catering services. From intimate gatherings to grand celebrations, we bring culinary excellence to every event.
               </motion.p>

               <div className="grid grid-cols-3 gap-4 my-8">
                  {features.map((feature, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                        className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                     >
                        <div className="mb-2">{feature.icon}</div>
                        <p className="text-sm font-medium text-gray-700">{feature.text}</p>
                     </motion.div>
                  ))}
               </div>

               <motion.div 
                  className="bg-gradient-to-r from-yellow/10 to-yellow/5 p-6 rounded-xl border border-yellow/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
               >
                  <p className="text-gray-700 font-medium mb-3">
                     Johil Catering Services: Authentic flavors, exceptional service! Perfect for every event.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <a 
                        href="tel:9842270025" 
                        className="inline-flex items-center gap-2 bg-yellow text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-all"
                     >
                        <RiCustomerService2Fill />
                        Call: 9842270025
                     </a>
                     <a 
                        href="https://wa.me/+919842230011?text=Hi%20I%20came%20from%20the%20website..."
                        target="blank" 
                        className="inline-flex items-center gap-2 bg-white text-yellow px-4 py-2 rounded-full hover:bg-gray-50 transition-all border border-yellow"
                     >
                        <FaWhatsapp />
                        Send Message
                     </a>
                  </div>
               </motion.div>
            </div>
         </motion.div>
      </motion.div>
   );
};

export default VideoSection; 