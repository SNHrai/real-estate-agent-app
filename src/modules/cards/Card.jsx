import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import room1 from "../../assets/ian-dooley-_-JR5TxKNSo-unsplash.jpg";
import room2 from "../../assets/patrick-perkins-3wylDrjxH-E-unsplash.jpg";
import room3 from "../../assets/pexels-chaitaastic-1918291.jpg";
import { motion } from "framer-motion";

import share from "../../assets/share.svg";
import "./Card.css";
import ThankYou from "./ThankYou";
import AgentProfile from "./AgentProfile";
import BuyForm from "./BuyForm";
import {
  FaBath,
  FaBed,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaShareAlt,
} from "react-icons/fa";

function Card({ properties, type }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBuyForm, setShowBuyForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showAgentProfile, setShowAgentProfile] = useState(false);



  const handleBuyClick = () => setShowBuyForm(true);
  const handleContactAgentClick = () => setShowAgentProfile(true);

  const handleBuyFormSubmit = (data) => {
    setShowBuyForm(false);
    setShowThankYou(true);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="py-2 sm:py-4 md:py-8">
      <div className="container px-2 mx-auto sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden bg-white rounded-3xl">
          <div className="flex flex-col lg:flex-row">
            {/* Image Carousel */}
            <div className="w-full lg:w-2/3">
              <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                selectedItem={currentSlide}
                onChange={setCurrentSlide}
                className="rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                {[room1, room2, room3].map((img, index) => (
                  <div
                    key={index}
                    className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                    <img
                      src={img}
                      alt={`Property ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black to-transparent">
                      <h2 className="text-lg font-bold text-white sm:text-xl md:text-2xl main-title">
                        Apartment for rent
                      </h2>
                    </div>
                  </div>
                ))}
              </Carousel>
              <div className="flex justify-center gap-2 p-2 bg-white">
                {[room1, room2, room3].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="object-cover transition-all rounded-md cursor-pointer w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 hover:scale-105"
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="w-full p-3 bg-white sm:p-4 md:p-6 lg:w-1/3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800 sm:text-2xl main-title">
                  Apartment for rent
                </h2>
                <button className="p-2 text-indigo-500 transition-colors duration-300 rounded-full hover:bg-indigo-100">
                  <FaShareAlt className="text-lg sm:text-xl" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between mb-4">
                <div className="flex flex-wrap gap-2 mb-2 sm:mb-0">
                  <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full fm-txt sm:text-sm">
                    Available
                  </span>
                  <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full fm-txt sm:text-sm">
                    {properties.type}
                  </span>
                </div>
                <div className="text-2xl font-bold text-indigo-600 sm:text-3xl btn-font">
                  ₹{properties.price}
                  <span className="text-base font-normal text-gray-600 sm:text-lg btn-font">
                  {type === "buy" ? '' : '/month'}
                  </span>
                </div>
              </div>

              <div className="p-2 mb-3 sm:p-4 bg-gray-50 rounded-xl">
                <div className="flex items-start mb-2 sm:mb-3">
                  <FaMapMarkerAlt className="mt-1 mr-2 text-base text-indigo-500 sm:text-lg" />
                  <span className="text-xs text-gray-600 sm:text-sm fm-txt">
                    {properties.address}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2 xs:grid-cols-3 sm:gap-4">
                  <div className="flex items-center p-2 bg-white rounded-lg shadow-sm xs:flex-col xs:items-center">
                    <FaBed className="mr-2 text-base text-indigo-500 xs:mr-0 xs:mb-1 sm:text-lg" />
                    <span className="text-xs text-gray-600 sm:text-sm fm-txt">
                      {properties.rooms} Bedroom
                    </span>
                  </div>
                  <div className="flex items-center p-2 bg-white rounded-lg shadow-sm xs:flex-col xs:items-center">
                    <FaBath className="mr-2 text-base text-indigo-500 xs:mr-0 xs:mb-1 sm:text-lg" />
                    <span className="text-xs text-gray-600 sm:text-sm fm-txt">
                      {properties.bathrooms} Bathroom
                    </span>
                  </div>
                  <div className="flex items-center p-2 bg-white rounded-lg shadow-sm xs:flex-col xs:items-center">
                    <FaRulerCombined className="mr-2 text-base text-indigo-500 xs:mr-0 xs:mb-1 sm:text-lg" />
                    <span className="text-xs text-gray-600 sm:text-sm fm-txt">
                      {properties.areaSqFit} sqft
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="mb-2 text-base font-semibold sm:text-lg main-title">
                  Property Description
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm fm-txt">
                  This beautiful apartment offers modern living in a prime
                  location. Enjoy the convenience of nearby amenities and a
                  comfortable living space perfect for individuals or small
                  families.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:gap-3">
                <button
                  onClick={handleBuyClick}
                  className="w-full py-2 text-sm text-white transition duration-300 bg-indigo-500 rounded-lg sm:py-3 btn-font sm:text-base hover:bg-indigo-600">
                  Buy Now
                </button>
                <button
                  onClick={handleContactAgentClick}
                  className="w-full py-2 text-sm text-indigo-500 transition duration-300 bg-white border border-indigo-500 rounded-lg sm:py-3 btn-font sm:text-base hover:bg-indigo-50">
                  Contact Agent
                </button>
              </div>
              {showBuyForm && (
                <BuyForm
                  onSubmit={handleBuyFormSubmit}
                  onClose={() => setShowBuyForm(false)}
                />
              )}
              {showThankYou && (
                <ThankYou onClose={() => setShowThankYou(false)} />
              )}
              {showAgentProfile && (
                <AgentProfile onClose={() => setShowAgentProfile(false)} />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Card;
