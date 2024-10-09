import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaTruck, FaCreditCard, FaCheck } from 'react-icons/fa';

function ReviewAndConfirm({ nextStep, prevStep, orderData }) {
  const { cart, deliveryInfo, paymentInfo } = orderData;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the order
    nextStep();
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl  overflow-hidden"
      >
        <div className="px-4 py-6 sm:px-8 sm:py-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 main-title">Review and Confirm</h2>
          
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center main-title">
              <FaShoppingCart className="mr-2 text-indigo-600" />
              Order Summary
            </h3>
            {cart.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 pb-4 border-b border-gray-200"
              >
                <div className="mb-2 sm:mb-0">
                  <h4 className="text-lg font-semibold text-gray-800 fm-txt">{item.name}</h4>
                  <p className="text-gray-600 fm-txt">Quantity: {item.quantity}</p>
                </div>
                <span className="text-xl font-bold text-indigo-600 btn-font">₹{(item.price * item.quantity).toLocaleString()}</span>
              </motion.div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <span className="text-xl sm:text-2xl font-semibold text-gray-800 main-title">Total</span>
              <span className="text-2xl sm:text-3xl font-bold text-indigo-600 btn-font">₹{total.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center main-title">
              <FaTruck className="mr-2 text-indigo-600" />
              Delivery Information
            </h3>
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
              <p className="mb-2 fm-txt"><strong>Name:</strong> {deliveryInfo.fullName}</p>
              <p className="mb-2 fm-txt"><strong>Address:</strong> {deliveryInfo.address}</p>
              <p className="mb-2 fm-txt"><strong>City:</strong> {deliveryInfo.city}, {deliveryInfo.state} {deliveryInfo.postalCode}</p>
              <p className="mb-2 fm-txt"><strong>Country:</strong> {deliveryInfo.country}</p>
              <p className="mb-2 fm-txt"><strong>Phone:</strong> {deliveryInfo.phoneNumber}</p>
              <p className="fm-txt"><strong>Delivery Option:</strong> {deliveryInfo.deliveryOption}</p>
            </div>
          </div>
          
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center main-title">
              <FaCreditCard className="mr-2 text-indigo-600" />
              Payment Method
            </h3>
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
              <p className="fm-txt">{paymentInfo.paymentMethod === 'card' ? 'Credit/Debit Card' : paymentInfo.paymentMethod}</p>
            </div>
          </div>
          
          <div className="mb-6 sm:mb-8">
            <label className="flex items-center">
              <input type="checkbox" required className="mr-2 form-checkbox h-5 w-5 text-indigo-600" />
              <span className="fm-txt">I agree to the terms and conditions</span>
            </label>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
            <button
              onClick={prevStep}
              className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition duration-300 btn-font"
            >
              Back to Payment
            </button>
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl btn-font flex items-center justify-center"
            >
              <FaCheck className="mr-2" />
              Place Order
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ReviewAndConfirm;
