import React from "react";
import { motion } from "framer-motion";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import room2 from "../../assets/patrick-perkins-3wylDrjxH-E-unsplash.jpg";
import Slider from "react-slick";

function RentalCards({ properties = [], type, setSelectedProperty }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true, // Change this to true
        },
      },
    ],
  };

  return (
    <div className="container px-2 mx-auto sm:px-4">
      <Slider {...settings}>
        {properties.map((property) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-2 sm:p-4"
            onClick={() => setSelectedProperty(property)}>
            <div className="overflow-hidden bg-white rounded-2xl">
              <div className="relative h-40 sm:h-48">
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
                <button className="absolute p-2 text-red-500 transition-colors duration-300 bg-white rounded-full top-2 right-2 hover:bg-red-100">
                  <FaHeart />
                </button>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="mb-1 text-base font-bold text-gray-800 truncate sm:text-lg main-title">
                  {property.title}
                </h3>
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="mr-1 text-sm text-indigo-500" />
                  <span className="text-xs text-gray-600 truncate sm:text-sm fm-txt">
                    {property.address}
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <div className="flex space-x-2 sm:space-x-4">
                    <div className="flex items-center">
                      <FaBed className="mr-1 text-sm text-indigo-500" />
                      <span className="text-xs text-gray-600 sm:text-sm fm-txt">
                        {property.rooms}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaBath className="mr-1 text-sm text-indigo-500" />
                      <span className="text-xs text-gray-600 sm:text-sm fm-txt">
                        {property.bathrooms}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaRulerCombined className="mr-1 text-sm text-indigo-500" />
                      <span className="text-xs text-gray-600 sm:text-sm fm-txt">
                        {property.areaSqFit} sqft
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                  <div className="mb-2 text-xl font-bold text-indigo-600 sm:mb-0 btn-font">
                    ₹{property.price}
                    <span className="text-xs font-normal text-gray-600 btn-font">
                      {type === "buy" ? "" : "/month"}
                    </span>
                  </div>
                  <button className="w-full px-3 py-1 text-sm text-white transition duration-300 bg-indigo-500 rounded-lg sm:w-auto btn-font hover:bg-indigo-600">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}

export default RentalCards;
