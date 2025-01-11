import React from "react";
import { motion } from "framer-motion";

const ScrollAnimation = ({ children, className, delay = 0 }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, delay, ease: "easeOut" }}
         className={className}
      >
         {children}
      </motion.div>
   );
};

export default ScrollAnimation; 