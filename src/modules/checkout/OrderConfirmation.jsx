import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaBox, FaTruck, FaEnvelope } from 'react-icons/fa';

function OrderConfirmation({ orderData }) {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl  overflow-hidden"
      >
        <div className="px-4 py-6 sm:px-8 sm:py-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8"
          >
            <FaCheckCircle className="text-green-500 text-6xl sm:text-7xl mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 main-title">Thank you for your purchase!</h2>
            <p className="text-xl text-gray-600 fm-txt">Your order has been successfully placed.</p>
          </motion.div>

          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center main-title">
              <FaBox className="mr-2 text-indigo-600" />
              Order Details
            </h3>
            <p className="mb-2 fm-txt"><strong>Order Number:</strong> #{orderNumber}</p>
            <p className="mb-2 fm-txt"><strong>Estimated Delivery:</strong> 7-10 business days</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center main-title">
              <FaTruck className="mr-2 text-indigo-600" />
              Order Summary
            </h3>
            {orderData.cart.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-between items-center mb-2 pb-2 border-b border-gray-200"
              >
                <span className="fm-txt">{item.name} x {item.quantity}</span>
                <span className="font-semibold text-indigo-600 btn-font">₹{(item.price * item.quantity).toLocaleString()}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center main-title">
              <FaEnvelope className="mr-2 text-indigo-600" />
              Confirmation Email
            </h3>
            <p className="fm-txt">We've sent a confirmation email to your registered email address with all the order details.</p>
          </div>

          <div className="text-center">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl btn-font">
              Track Order
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default OrderConfirmation;
