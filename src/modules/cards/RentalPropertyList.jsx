import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaDollarSign,
  FaBookmark,
} from "react-icons/fa";
import PropertyCard from "./PropertyCard";

const RentalPropertyList = ({ properties }) => {
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [filters, setFilters] = useState({ type: "All", priceRange: "All" });

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.type === "All" || property.type === filters.type) &&
      (filters.priceRange === "All" ||
        (filters.priceRange === "0-5000" && property.price <= 5000) ||
        (filters.priceRange === "5001-10000" &&
          property.price > 5000 &&
          property.price <= 10000) ||
        (filters.priceRange === "10001+" && property.price > 10000))
    );
  });

  return (
    <div className="flex flex-col w-full max-w-[1200px] bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Filter section */}
      <div className="p-4 bg-gray-100 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Rental Properties</h2>
          <div className="flex space-x-4">
            <select
              name="type"
              onChange={handleFilterChange}
              className="p-2 border rounded-md">
              <option value="All">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Studio">Studio</option>
            </select>
            <select
              name="priceRange"
              onChange={handleFilterChange}
              className="p-2 border rounded-md">
              <option value="All">All Prices</option>
              <option value="0-5000">₹0 - ₹5,000</option>
              <option value="5001-10000">₹5,001 - ₹10,000</option>
              <option value="10001+">₹10,001+</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar with small cards */}
        <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto max-h-[calc(100vh-200px)]">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onClick={handlePropertyClick}
            />
          ))}
        </div>

        {/* Main card area */}
        <div className="w-2/3">
          <div className="relative">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
              {selectedProperty.images.map((img, index) => (
                <div key={index} className="h-[400px]">
                  <img
                    src={img}
                    alt={`Property ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </Carousel>
            <div className="absolute z-10 top-4 right-4">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-2 transition-colors duration-300 bg-white rounded-full shadow-md hover:bg-gray-100">
                <FaBookmark
                  className={`w-6 h-6 ${
                    isBookmarked ? "text-red-500" : "text-gray-400"
                  }`}
                />
              </button>
            </div>
            <div className="absolute z-10 top-4 left-4">
              <span className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
                {selectedProperty.status}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              {selectedProperty.title}
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              {selectedProperty.type}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <FaRulerCombined className="w-6 h-6 mr-2 text-indigo-600" />
                <span className="text-gray-700">
                  {selectedProperty.areaSqFt} sq ft{" "}
                </span>
              </div>
              <div className="flex items-center">
                <FaBed className="w-6 h-6 mr-2 text-indigo-600" />
                <span className="text-gray-700">
                  {selectedProperty.rooms}{" "}
                  {selectedProperty.rooms > 1 ? "Rooms" : "Room"}{" "}
                </span>
              </div>
              <div className="flex items-center">
                <FaBath className="w-6 h-6 mr-2 text-indigo-600" />
                <span className="text-gray-700">
                  {selectedProperty.bathrooms}{" "}
                  {selectedProperty.bathrooms > 1 ? "Baths" : "Bath"}{" "}
                </span>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="w-6 h-6 mr-2 text-indigo-600" />
              <p className="text-lg text-gray-600">
                {selectedProperty.address}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaDollarSign className="w-8 h-8 mr-2 text-indigo-600" />
                <span className="text-3xl font-bold text-indigo-600">
                  ₹{selectedProperty.price}/month{" "}
                </span>
              </div>
              <button className="px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalPropertyList;
