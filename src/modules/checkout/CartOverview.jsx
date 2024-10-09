import React from 'react';
import { motion } from 'framer-motion';
import { FaMinus, FaPlus, FaTrash, FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';
import SofaImage from "../../assets/sofa-img.jpg"

function CartOverview({ nextStep, updateOrderData }) {
  const cartItems = [
    { id: 1, name: 'Modern L-Shaped Sofa', price: 59999, quantity: 1, image: 'sofa-image-url', rooms: 3, bathrooms: 2, areaSqFt: 1200, address: '123 Main St, City, State' },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (id, newQuantity) => {
    // Update quantity logic
  };

  const removeItem = (id) => {
    // Remove item logic
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-12 px-2 sm:px-3 lg:px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden"
      >
        <div className="px-8 py-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 main-title">Your Shopping Cart</h2>
          {cartItems.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center mb-8 pb-8 border-b border-gray-200"
            >
              <div className="w-full md:w-1/3 h-64 md:h-48 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 mb-4 md:mb-0">
                <img src={SofaImage} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow md:ml-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 main-title">{item.name}</h3>
                {/* <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="mr-1 text-sm text-indigo-500" />
                  <span className="text-sm text-gray-600 truncate fm-txt">{item.address}</span>
                </div> */}
                {/* <div className="flex flex-wrap items-center justify-between mb-4">
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <FaBed className="mr-1 text-sm text-indigo-500" />
                      <span className="text-sm text-gray-600 fm-txt">{item.rooms}</span>
                    </div>
                    <div className="flex items-center">
                      <FaBath className="mr-1 text-sm text-indigo-500" />
                      <span className="text-sm text-gray-600 fm-txt">{item.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <FaRulerCombined className="mr-1 text-sm text-indigo-500" />
                      <span className="text-sm text-gray-600 fm-txt">{item.areaSqFt} sqft</span>
                    </div>
                  </div>
                </div> */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-indigo-600 btn-font">₹{item.price.toLocaleString()}</div>
                  <div className="flex items-center">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition-colors duration-200">
                      <FaMinus className="w-3 h-3" />
                    </button>
                    <span className="mx-4 font-medium text-gray-700">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition-colors duration-200">
                      <FaPlus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="mt-4 text-red-500 hover:text-red-700 transition-colors duration-200 flex items-center">
                  <FaTrash className="w-4 h-4 mr-2" />
                  <span className="btn-font">Remove</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="bg-gray-50 px-8 py-10">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-semibold text-gray-900 main-title">Total</span>
            <span className="text-3xl font-bold text-indigo-600 btn-font">₹{total.toLocaleString()}</span>
          </div>
          <button 
            onClick={() => {
              updateOrderData({ cart: cartItems });
              nextStep();
            }} 
            className="w-full text-nowrap bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-xl hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl btn-font"
          >
            Proceed to Checkout
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default CartOverview;
