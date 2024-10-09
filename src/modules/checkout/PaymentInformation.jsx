import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaUniversity, FaMobileAlt, FaMoneyBillWave, FaCopy } from 'react-icons/fa';
import { SiGooglepay, SiPaytm, SiPhonepe } from 'react-icons/si';

function PaymentInformation({ nextStep, prevStep, updateOrderData }) {
  const [paymentInfo, setPaymentInfo] = useState({
    paymentMethod: 'card',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    upiProvider: '',
    useBillingAddress: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateOrderData({ paymentInfo });
    nextStep();
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText(paymentInfo.upiId);
    alert('UPI ID copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden"
      >
        <div className="px-4 py-6 sm:px-8 sm:py-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 main-title">Payment Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 main-title">Payment Method</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['card', 'netbanking', 'upi', 'cod'].map((method) => (
                  <label key={method} className="flex items-center justify-center p-3 sm:p-4 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200 transition duration-300">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={paymentInfo.paymentMethod === method}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {method === 'card' && <FaCreditCard className="mr-2 text-indigo-600" />}
                    {method === 'netbanking' && <FaUniversity className="mr-2 text-indigo-600" />}
                    {method === 'upi' && <FaMobileAlt className="mr-2 text-indigo-600" />}
                    {method === 'cod' && <FaMoneyBillWave className="mr-2 text-indigo-600" />}
                    <span className="fm-txt capitalize text-sm sm:text-base">{method === 'cod' ? 'Cash on Delivery' : method}</span>
                  </label>
                ))}
              </div>
            </div>

            {paymentInfo.paymentMethod === 'card' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <input
                  type="text"
                  name="cardName"
                  placeholder="Cardholder's Name"
                  value={paymentInfo.cardName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={paymentInfo.cardNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={paymentInfo.expiryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={paymentInfo.cvv}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </motion.div>
            )}

            {paymentInfo.paymentMethod === 'upi' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4"
              >
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    name="upiId"
                    placeholder="Enter UPI ID"
                    value={paymentInfo.upiId}
                    onChange={handleChange}
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={copyUpiId}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-r-xl hover:bg-indigo-700 transition duration-300"
                  >
                    <FaCopy />
                  </button>
                </div>
                <div className="flex flex-wrap justify-around">
                  {['Google Pay', 'PhonePe', 'Paytm'].map((provider) => (
                    <label key={provider} className="flex flex-col items-center cursor-pointer mb-4 sm:mb-0">
                      <input
                        type="radio"
                        name="upiProvider"
                        value={provider}
                        checked={paymentInfo.upiProvider === provider}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-3 rounded-full ${paymentInfo.upiProvider === provider ? 'bg-indigo-100' : 'bg-gray-100'} hover:bg-indigo-200 transition duration-300`}>
                        {provider === 'Google Pay' && <SiGooglepay className="text-3xl text-indigo-600" />}
                        {provider === 'PhonePe' && <SiPhonepe className="text-3xl text-indigo-600" />}
                        {provider === 'Paytm' && <SiPaytm className="text-3xl text-indigo-600" />}
                      </div>
                      <span className="mt-2 fm-txt text-sm sm:text-base">{provider}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {paymentInfo.paymentMethod === 'netbanking' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4"
              >
                <select
                  name="bank"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                >
                  <option value="">Select your bank</option>
                  <option value="sbi">State Bank of India</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="axis">Axis Bank</option>
                </select>
              </motion.div>
            )}

            <div className="mt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="useBillingAddress"
                  checked={paymentInfo.useBillingAddress}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="fm-txt text-sm sm:text-base">Use delivery address as billing address</span>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="w-full sm:w-auto px-6 py-3 mb-4 sm:mb-0 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition duration-300 btn-font"
              >
                Back to Delivery
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl btn-font"
              >
                Review Order
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default PaymentInformation;
