import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdRestaurantMenu } from 'react-icons/md';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredDish: '',
    visitFrequency: 'first-time'
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('YOUR_WEB3FORMS_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY',
          ...formData
        })
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredDish: '',
          visitFrequency: 'first-time'
        });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600">We'd love to hear from you! Share your dining experience or ask us anything.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <FaPhone className="text-yellow text-2xl mr-3" />
              <h3 className="font-semibold text-lg">Phone</h3>
            </div>
            <p className="text-gray-600">+91 123 456 7890</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-yellow text-2xl mr-3" />
              <h3 className="font-semibold text-lg">Email</h3>
            </div>
            <p className="text-gray-600">info@foodwebsite.com</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-yellow text-2xl mr-3" />
              <h3 className="font-semibold text-lg">Location</h3>
            </div>
            <p className="text-gray-600">123 Food Street, Foodie City, 12345</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent outline-none transition-all"
                placeholder="Your Name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent outline-none transition-all"
                placeholder="Your Phone Number"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Preferred Dish</label>
              <div className="relative">
                <MdRestaurantMenu className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="preferredDish"
                  value={formData.preferredDish}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent outline-none transition-all"
                  placeholder="Your Favorite Dish"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Visit Frequency</label>
              <select
                name="visitFrequency"
                value={formData.visitFrequency}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent outline-none transition-all"
              >
                <option value="first-time">First Time</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="occasionally">Occasionally</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent outline-none transition-all"
                placeholder="Message Subject"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent outline-none transition-all resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow text-white py-3 rounded-lg hover:bg-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          {/* Success Message */}
          {success && (
            <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact; 