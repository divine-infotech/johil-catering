import React, { useEffect, useState, useRef } from "react";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearOrderDetails } from "../redux/slices/OrderSlice";
import { clearCart } from "../redux/slices/CartSlice";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Success = () => {
   const [loading, setLoading] = useState(true);
   const [showOrder, setShowOrder] = useState(false);
   const [redirecting, setRedirecting] = useState(false);
   const [error, setError] = useState(null);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   
   const cartItems = useSelector((state) => state.cart.cart);
   const orderDetails = useSelector((state) => state.order.details);
   const receiptRef = useRef(); // Reference for the receipt

   useEffect(() => {
      if (!orderDetails) {
         setError("No order details found. Please try again.");
         setLoading(false);
      } else {
         setTimeout(() => {
            setLoading(false);
            setShowOrder(true);
         }, 2000);

         setTimeout(() => {
            setShowOrder(false);
            setRedirecting(true);
         }, 6000);

         setTimeout(() => {
            // Send message to WhatsApp
            const whatsappMessage = `Order Details:\n${orderDetails.order}\nTotal: ${orderDetails.total}\nName: ${orderDetails.name}\nPhone: ${orderDetails.phone}\nAddress: ${orderDetails.address}`;
            const whatsappUrl = `https://wa.me/+919042621178?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');

            dispatch(clearOrderDetails());
            dispatch(clearCart());
            navigate('/');
         }, 8000);
      }
   }, [navigate, dispatch, orderDetails]);

   const generatePDF = () => {
      const input = receiptRef.current; // Get the receipt reference
      html2canvas(input, { scale: 2 }).then((canvas) => {
         const imgData = canvas.toDataURL("image/png");
         const pdf = new jsPDF();
         const imgWidth = 190; // Adjust width
         const pageHeight = pdf.internal.pageSize.height;
         const imgHeight = (canvas.height * imgWidth) / canvas.width;
         const heightLeft = imgHeight;

         let position = 0;

         pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
         pdf.save("receipt.pdf");
      });
   };

   if (error) {
      return (
         <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-red-100 p-6 rounded-2xl shadow-xl max-w-md w-full mx-auto">
               <h2 className="text-2xl font-bold text-red-600">Error</h2>
               <p className="text-red-500 mt-2">{error}</p>
               <button
                  onClick={() => navigate('/cart')}
                  className="mt-4 bg-yellow text-white py-2 px-4 rounded-lg"
               >
                  Go Back to Cart
               </button>
            </div>
         </div>
      );
   }

   const total = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

   return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
         {loading && (
            <div className="text-center">
               <PropagateLoader color="#ffb703" />
               <p className="mt-4 text-gray-600 text-lg">Placing your order...</p>
            </div>
         )}

         {showOrder && (
            <div ref={receiptRef} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto animate-modal-pop">
               <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                     </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Order Successful!</h2>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">Thank you for your order</p>
               </div>

               <div className="space-y-4">
                  <div className="border-t border-b border-gray-200 py-4">
                     <h3 className="font-semibold mb-3 text-base md:text-lg">Order Details:</h3>
                     <div className="space-y-2">
                        {cartItems.map((item) => (
                           <div key={item.id} className="flex justify-between items-center text-sm md:text-base">
                              <span className="text-gray-700">{item.name} x {item.qty}</span>
                              <span className="font-medium">₹{item.price * item.qty}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="text-right">
                     <span className="font-bold text-lg md:text-xl">Total: ₹{total}</span>
                  </div>

                  {orderDetails && (
                     <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-base md:text-lg">Delivery Details:</h3>
                        <div className="space-y-1 text-sm md:text-base">
                           <p className="text-gray-700">{orderDetails.name}</p>
                           <p className="text-gray-700">{orderDetails.phone}</p>
                           <p className="text-gray-700">{orderDetails.address}</p>
                           {orderDetails.message && (
                              <p className="text-gray-600 mt-2 italic">
                                 Note: {orderDetails.message}
                              </p>
                           )}
                        </div>
                     </div>
                  )}
               </div>

               <button
                  onClick={generatePDF}
                  className="mt-4 bg-yellow text-white py-2 px-4 rounded-lg"
               >
                  Download Receipt
               </button>
            </div>
         )}

         {redirecting && (
            <div className="text-center">
               <PropagateLoader color="#ffb703" />
               <p className="mt-4 text-gray-600 text-lg">Redirecting to home...</p>
            </div>
         )}
      </div>
   );
};

export default Success;
