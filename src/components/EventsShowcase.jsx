import React from "react";
import { motion } from "framer-motion";
import { BsCalendarEvent, BsArrowRight } from "react-icons/bs";
import { GiPartyPopper, GiCakeSlice } from "react-icons/gi";
import { FaGlassCheers, FaUserTie } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";



const EventsShowcase = () => {
   const events = [
      {
         title: "Wedding Ceremonies",
         icon: <FaGlassCheers className="text-4xl text-yellow" />,
         description: "Make your special day memorable with our exquisite catering",
         image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80"
      },
      {
         title: "Corporate Events",
         icon: <MdCorporateFare className="text-4xl text-yellow" />,
         description: "Professional catering solutions for your business meetings",
         image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80"
      },
      {
         title: "Birthday Parties",
         icon: <GiCakeSlice className="text-4xl text-yellow" />,
         description: "Celebrate your birthday with delicious food and perfect setup",
         image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80"
      }
   ];

   const services = [
      { icon: <GiPartyPopper />, text: "Event Planning" },
      { icon: <IoRestaurant />, text: "Custom Menu" },
      { icon: <FaUserTie />, text: "Professional Staff" },
      { icon: <BsCalendarEvent />, text: "Flexible Booking" }
   ];

   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         className="py-16 bg-gradient-to-b from-white to-gray-50"
      >
         <div className="container mx-auto px-4">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-12"
            >
               <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Crafting Memorable
                  <span className="text-yellow"> Experiences</span>
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                  From intimate gatherings to grand celebrations, we bring your vision to life with exceptional service and culinary excellence.
               </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
               {events.map((event, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: index * 0.2 }}
                     className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all"
                  >
                     <div className="relative h-64 overflow-hidden">
                        <img
                           src={event.image}
                           alt={event.title}
                           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                        <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full">
                           {event.icon}
                        </div>
                     </div>
                     <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <button className="flex items-center gap-2 text-yellow hover:text-yellow-600 font-semibold transition-colors">
                           Learn More <BsArrowRight />
                        </button>
                     </div>
                  </motion.div>
               ))}
            </div>

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-yellow/10 rounded-3xl p-8 md:p-12"
            >
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                     <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        Why Choose Our Catering Service?
                     </h3>
                     <p className="text-gray-600 mb-6">
                        Experience the perfect blend of taste, presentation, and service. We handle everything from setup to cleanup, letting you focus on enjoying your event.
                     </p>
                     <div className="grid grid-cols-2 gap-4">
                        {services.map((service, index) => (
                           <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
                           >
                              <span className="text-yellow text-xl">{service.icon}</span>
                              <span className="text-gray-700 font-medium">{service.text}</span>
                           </motion.div>
                        ))}
                     </div>
                  </div>
                  <div className="relative">
                     <img
                        src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80"
                        alt="Premium Catering"
                        className="rounded-2xl shadow-lg"
                     />
                     <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                        <div className="text-center">
                           <div className="text-yellow text-4xl mb-2">
                              <GiPartyPopper />
                           </div>
                           <p className="text-gray-800 font-bold">500+</p>
                           <p className="text-gray-600 text-sm">Events Catered</p>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </motion.div>
   );
};

export default EventsShowcase; 