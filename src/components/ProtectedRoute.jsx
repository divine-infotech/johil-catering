import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
   const orderDetails = useSelector((state) => state.order.details);
   console.log("Order Details:", orderDetails);

   if (!orderDetails) {
      return <Navigate to="/cart" />;
   }

   return element;
};

export default ProtectedRoute;
