import React, { useState } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { useSelector } from 'react-redux';

const CheckoutForm = ({ onSubmit, cartTotal, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="max-w-2xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <IoMdClose className="w-6 h-6" />
        </button>

        <h2 className="text-xl md:text-2xl font-bold mb-6 pr-8">Checkout Details</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-gray-700 font-medium text-sm md:text-base">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent outline-none text-sm md:text-base"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-700 font-medium text-sm md:text-base">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent outline-none text-sm md:text-base"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-700 font-medium text-sm md:text-base">Delivery Address *</label>
            <textarea
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent outline-none resize-none text-sm md:text-base"
              placeholder="Enter your complete delivery address"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-700 font-medium text-sm md:text-base">Additional Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent outline-none resize-none text-sm md:text-base"
              placeholder="Any special instructions or requests?"
            />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="mb-4">
              <h3 className="text-base md:text-lg font-semibold mb-2">Order Total</h3>
              <p className="text-xl md:text-2xl font-bold text-yellow">₹{cartTotal}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2 text-sm md:text-base">Payment Method</h3>
              <p className="text-gray-600 flex items-center gap-2 text-sm md:text-base">
                Contact us after checkout: 
                <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" 
                  className="text-green-600 hover:text-green-700 transition-colors">
                  <FaWhatsapp className="text-xl md:text-2xl" />
                </a>
                <a href="tel:YOUR_PHONE_NUMBER" 
                  className="text-blue-600 hover:text-blue-700 transition-colors">
                  <FaPhone className="text-lg md:text-xl" />
                </a>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow text-white py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-yellow-600 transition-all"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm; 