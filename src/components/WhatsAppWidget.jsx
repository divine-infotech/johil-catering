import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
   const phoneNumber = "919842230011"; // Replace with your WhatsApp number
   const message = "Hi, I need assistance with your services.";

   return (
      <a
         href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
         target="_blank"
         rel="noopener noreferrer"
         className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
         aria-label="Chat with us on WhatsApp"
      >
         <FaWhatsapp size={24} />
      </a>
   );
};

export default WhatsAppWidget; 