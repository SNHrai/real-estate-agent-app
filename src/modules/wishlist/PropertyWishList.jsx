import React from "react";
import { motion } from "framer-motion";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaTrash,
  FaShoppingCart,
  FaPhoneAlt,
} from "react-icons/fa";
import room2 from "../../assets/patrick-perkins-3wylDrjxH-E-unsplash.jpg";
import { Link } from "react-router-dom";

function PropertyWishList() {
  const wishlistProperties = [
    {
      id: 1,
      title: "Modern Apartment",
      address: "123 Main St, City",
      rooms: 2,
      bathrooms: 1,
      areaSqFt: 1000,
      price: 250000,
      status: "For Sale",
      type: "Apartment",
    },
    {
      id: 2,
      title: "Modern Apartment",
      address: "123 Main St, City",
      rooms: 2,
      bathrooms: 1,
      areaSqFt: 1000,
      price: 250000,
      status: "For Sale",
      type: "Apartment",
    },
    // Add more properties as needed
  ];

  const removeFromWishlist = (id) => {
    console.log(`Removing property with id: ${id}`);
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {wishlistProperties.map((property) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden bg-white rounded-3xl">
            <div className="relative h-48">
              <img
                src={room2}
                alt={property.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute flex space-x-1 top-2 left-2">
                <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full fm-txt">
                  {property.status}
                </span>
                <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full fm-txt">
                  {property.type}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="mb-1 text-lg font-bold text-gray-800 truncate main-title">
                {property.title}
              </h3>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-1 text-sm text-indigo-500" />
                <span className="text-xs text-gray-600 truncate fm-txt">
                  {property.address}
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between mb-2">
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <FaBed className="mr-1 text-sm text-indigo-500" />
                    <span className="text-xs text-gray-600 fm-txt">
                      {property.rooms}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="mr-1 text-sm text-indigo-500" />
                    <span className="text-xs text-gray-600 fm-txt">
                      {property.bathrooms}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaRulerCombined className="mr-1 text-sm text-indigo-500" />
                    <span className="text-xs text-gray-600 fm-txt">
                      {property.areaSqFt} sqft
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-indigo-600 btn-font">
                  ₹{property.price}
                </div>
                <button
                  onClick={() => removeFromWishlist(property.id)}
                  className="flex items-center px-3 py-1 text-sm text-white transition duration-300 bg-red-500 rounded-lg btn-font hover:bg-red-600">
                  <FaTrash className="mr-2" />
                  Remove
                </button>
              </div>
              <button
                onClick={() =>
                  console.log(`Contact agent for property ${property.id}`)
                }
                className="flex items-center justify-center w-full px-3 py-2 text-sm text-white transition duration-300 bg-indigo-500 rounded-lg btn-font hover:bg-indigo-600">
                <FaPhoneAlt className="mr-2" />
                Contact Agent
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PropertyWishList;
