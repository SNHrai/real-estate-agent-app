import React from 'react';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const PropertyCard = ({ property, onClick }) => {
  return (
    <div
      className="mb-4 transition-all duration-300 bg-white rounded-lg shadow cursor-pointer hover:shadow-md hover:-translate-y-1"
      onClick={() => onClick(property)}
    >
      <div className="relative">
        <img
          src={property.images[0]}
          alt={""}
          className="object-cover w-full h-40 rounded-t-lg"
        />
        <div className="absolute z-10 top-2 left-2">
          <span className="px-2 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full">
            {property.type}
            </span>
        </div>
        <div className="absolute z-10 top-2 right-2">
          <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
            {property.status}
            </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-800 truncate">{property.title}</h3>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-gray-600">
            <FaRulerCombined className="mr-1" />
            <span className="text-sm">{property.areaSqFt} </span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaBed className="mr-1" />
            <span className="text-sm">{property.rooms} </span>
          </div>
          <div className="flex items-center text-gray-600"> 
            <FaBath className="mr-1" />
            <span className="text-sm">{property.bathrooms} </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600">₹{property.price}/month </span>
          <button className="px-3 py-1 text-xs font-semibold text-white transition-colors duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;