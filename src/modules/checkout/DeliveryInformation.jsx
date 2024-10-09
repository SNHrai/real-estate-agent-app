import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTruck } from 'react-icons/fa';

function DeliveryInformation({ nextStep, prevStep, updateOrderData }) {
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    deliveryOption: 'standard',
    instructions: '',
  });

  const handleChange = (e) => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateOrderData({ deliveryInfo });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-12 px-2 sm:px-3 lg:px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl  overflow-hidden"
      >
        <div className="px-8 py-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 main-title">Delivery Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={deliveryInfo.fullName}
                  onChange={handleChange}
                  className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="relative">
                <FaPhone className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={deliveryInfo.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={deliveryInfo.email}
                  onChange={handleChange}
                  className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={deliveryInfo.address}
                  onChange={handleChange}
                  className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={deliveryInfo.city}
                  onChange={handleChange}
                  className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="state"
                  placeholder="State/Province"
                  value={deliveryInfo.state}
                  onChange={handleChange}
                  className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal/ZIP Code"
                  value={deliveryInfo.postalCode}
                  onChange={handleChange}
                  className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={deliveryInfo.country}
                  onChange={handleChange}
                  className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 main-title">Delivery Options</h3>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="standard"
                    checked={deliveryInfo.deliveryOption === 'standard'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="fm-txt text-nowrap">Standard Delivery</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="express"
                    checked={deliveryInfo.deliveryOption === 'express'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="fm-txt text-nowrap">Express Delivery</span>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <textarea
                name="instructions"
                placeholder="Delivery Instructions (Optional)"
                value={deliveryInfo.instructions}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows="3"
              ></textarea>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="w-full sm:w-auto px-6 py-3 mb-4 sm:mb-0 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition duration-300 btn-font"
              >
                Back to Cart
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl btn-font"
              >
               Procced to payment
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryInformation;
