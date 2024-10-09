import React, { useEffect, useState } from "react";
import Card from "../cards/Card";
import { BsHouseDoor } from "react-icons/bs";
import location from "../../assets/card-images/mdi--location.svg";
import RentalCards from "../rental-cards/RentalCards";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
import { FaRupeeSign, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  defaultData,
  defaultOwnedData,
  defaultRentData,
  locations,
  types,
} from "../../dummyData";
import { fetchRentedPropertyData } from "../../slice/RentPropertySlice";
import Loader from "../../utils/loader/Loader";
import { fetchOwnedPropertyData } from "../../slice/OwnedPropertySlice";

function Rent() {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [houseInfoType, setHouseInfoType] = useState("buy");
  const [minPrice, setMinPrice] = useState(
    houseInfoType === "buy" ? 2000000 : 4000
  );
  const [maxPrice, setMaxPrice] = useState(
    houseInfoType === "buy" ? 7000000 : 25000
  );

  // Use effect to handle changes in houseInfoType dynamically
  useEffect(() => {
    setMinPrice(houseInfoType === "buy" ? 2000000 : 4000);
    setMaxPrice(houseInfoType === "buy" ? 7000000 : 25000);
  }, [houseInfoType]); // Re-run the effect when houseInfoType changes

  const [selectedProperty, setSelectedProperty] = useState(
    houseInfoType === "buy" ? defaultOwnedData : defaultRentData
  );
  useEffect(() => {
    setSelectedProperty(
      houseInfoType === "buy" ? defaultOwnedData : defaultRentData
    );
  }, [houseInfoType]); // Re-run the effect when houseInfoType changes
  
  const { rentedItems, status, error } = useSelector(
    (state) => state.rentedProperty
  );
  const { ownedProperty, propertiesStatus, propertyError } = useSelector(
    (state) => state.ownedProperties
  );

  const selectLocation = (location) => {
    setSelectedLocation(location);
    setIsLocationOpen(false);
  };

  useEffect(() => {
    dispatch(fetchOwnedPropertyData());
    dispatch(fetchRentedPropertyData());
  }, [dispatch]);

  useEffect(() => {
    console.log("rented items []", rentedItems);
    console.log("owned items []", ownedProperty);
  }, [rentedItems, ownedProperty]);

  if (status === "loading" || propertiesStatus === "loading")
    return (
      <div>
        <Loader />
      </div>
    );
  if (status === "failed" || propertyError === "failed")
    return <div>Error: {error}</div>;

  //   <Card properties={properties.filter(p => p.price >= minPrice && p.price <= maxPrice)} />
  // <RentalCards properties={properties.filter(p => p.price >= minPrice && p.price <= maxPrice)} />

  const selectType = (type) => {
    setSelectedType(type);
    setIsTypeOpen(false);
  };

  return (
    <div className="bg-[#f3f4f6]">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 mb-8 bg-white rounded-3xl md:p-8 lg:p-12">
          <h3 className="mb-6 text-2xl font-bold main-title">Property Type</h3>
          <div className="flex justify-center space-x-4">
            <div className="p-4 toggle_container md:p-8 lg:p-12">
              <div className="w-64 lg:w-96 switches-container">
                <input
                  type="radio"
                  id="switchBuy"
                  name="switchPlan"
                  value="buy"
                  style={{ cursor: "pointer" }}
                  onChange={(e) => setHouseInfoType(e.target.value)}
                  // onClick={() => setProviderDetails(comprehensive)}
                />
                <input
                  type="radio"
                  id="switchRent"
                  name="switchPlan"
                  value="rent"
                  style={{ cursor: "pointer" }}
                  onChange={(e) => setHouseInfoType(e.target.value)}
                  // onClick={() => setProviderDetails(thirdParty)}
                />
                <label
                  for="switchBuy"
                  style={{
                    color: houseInfoType === "buy" ? "#ffffff" : "rgb(0,0,0)",
                  }}
                  className="fm-txt">
                  {"Buy"}
                </label>
                <label
                  for="switchRent"
                  style={{
                    color: houseInfoType === "rent" ? "#ffffff" : "rgb(0,0,0)",
                  }}
                  className="fm-txt">
                  {"Rent"}
                </label>
                <div className="switch-wrapper">
                  <div className="switch"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-4 mb-8 bg-white rounded-3xl sm:p-6 md:p-8 lg:p-12">
          <h2 className="mb-6 text-2xl font-bold text-center main-title sm:text-3xl md:mb-8">
            Find Your Perfect Property
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {/* Location Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center justify-between w-full p-3 bg-white border border-gray-300 rounded-xl btn-font">
                <span className="flex items-center">
                  <img src={location} alt="Location" className="h-5 mr-2" />
                  {selectedLocation || "Select location"}
                </span>
                <FaSearch className="text-gray-400" />
              </button>
              {isLocationOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute z-10 w-full mt-1 bg-white border border-gray-300 shadow-lg rounded-xl">
                  {locations.map((loc) => (
                    <div
                      key={loc}
                      onClick={() => selectLocation(loc)}
                      className="p-3 cursor-pointer hover:bg-gray-100 tag-text">
                      {loc}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Type Selector */}
            <div className="relative">
              <button
                onClick={() => setIsTypeOpen(!isTypeOpen)}
                className="flex items-center justify-between w-full p-3 bg-white border border-gray-300 rounded-xl btn-font">
                <span className="flex items-center">
                  <BsHouseDoor className="mr-2" />
                  {selectedType || "Select type"}
                </span>
                <FaSearch className="text-gray-400" />
              </button>
              {isTypeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute z-10 w-full mt-1 bg-white border border-gray-300 shadow-lg rounded-xl">
                  {types.map((type) => (
                    <div
                      key={type}
                      onClick={() => selectType(type)}
                      className="p-3 cursor-pointer hover:bg-gray-100 tag-text">
                      {type}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Price Range Selector */}

            <div className="p-3 bg-white border border-gray-300 rounded-xl">
              <span className="block mb-2 text-sm font-medium text-gray-700 btn-font">
                Price Range
              </span>
              {houseInfoType === "rent" ? (
                <div className="flex items-center space-x-4">
                  <FaRupeeSign className="text-gray-400" />
                  <input
                    type="range"
                    min="4000"
                    max="25000"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
                    style={{
                      background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${
                        ((minPrice - 4000) / (25000 - 4000)) * 100
                      }%, #e5e7eb ${
                        ((minPrice - 4000) / (25000 - 4000)) * 100
                      }%, #e5e7eb 100%)`,
                    }}
                  />
                  <FaRupeeSign className="text-gray-400" />
                  <input
                    type="range"
                    min="4000"
                    max="25000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
                    style={{
                      background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${
                        ((maxPrice - 4000) / (25000 - 4000)) * 100
                      }%, #e5e7eb ${
                        ((maxPrice - 4000) / (25000 - 4000)) * 100
                      }%, #e5e7eb 100%)`,
                    }}
                  />
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <FaRupeeSign className="text-gray-400" />
                  <input
                    type="range"
                    min="2000000" // 20 lakh
                    max="7000000" // 70 lakh
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
                    style={{
                      background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${
                        ((minPrice - 2000000) / (7000000 - 2000000)) * 100
                      }%, #e5e7eb ${
                        ((minPrice - 2000000) / (7000000 - 2000000)) * 100
                      }%, #e5e7eb 100%)`,
                    }}
                  />
                  <FaRupeeSign className="text-gray-400" />
                  <input
                    type="range"
                    min="2000000" // 20 lakh
                    max="7000000" // 70 lakh
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
                    style={{
                      background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${
                        ((maxPrice - 2000000) / (7000000 - 2000000)) * 100
                      }%, #e5e7eb ${
                        ((maxPrice - 2000000) / (7000000 - 2000000)) * 100
                      }%, #e5e7eb 100%)`,
                    }}
                  />
                </div>
              )}
              {/* <div className="flex items-center space-x-4">
                <FaRupeeSign className="text-gray-400" />
                <input
                  type="range"
                  min="4000"
                  max="25000"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
                  style={{
                    background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${
                      ((minPrice - 4000) / (25000 - 4000)) * 100
                    }%, #e5e7eb ${
                      ((minPrice - 4000) / (25000 - 4000)) * 100
                    }%, #e5e7eb 100%)`,
                  }}
                />
                <FaRupeeSign className="text-gray-400" />
                <input
                  type="range"
                  min="4000"
                  max="25000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
                  style={{
                    background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${
                      ((maxPrice - 4000) / (25000 - 4000)) * 100
                    }%, #e5e7eb ${
                      ((maxPrice - 4000) / (25000 - 4000)) * 100
                    }%, #e5e7eb 100%)`,
                  }}
                />
              </div> */}
              <div className="mt-2 text-sm text-gray-600 btn-font">
                ₹{minPrice} - ₹{maxPrice}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center sm:mt-8">
            <button
              onClick={() => {
                // Handle submit logic here
                console.log("Filtered data:", {
                  selectedLocation,
                  selectedType,
                  minPrice,
                  maxPrice,
                });
              }}
              className="px-6 py-3 text-white transition duration-300 bg-indigo-500 rounded-lg btn-font hover:bg-indigo-600">
              Apply Filters
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-8 mb-8 bg-white rounded-3xl md:p-12">
          <h3 className="mb-6 text-2xl font-bold main-title">
            Available Properties
          </h3>
          <Card properties={selectedProperty} type={houseInfoType} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-4 bg-white rounded-3xl sm:p-6 md:p-8 lg:p-12">
          <h3 className="mb-4 text-xl font-bold main-title sm:text-2xl sm:mb-6">
            Available Properties
          </h3>
          <RentalCards
            properties={
              houseInfoType === "buy"
                ? ownedProperty?.ownedProperties
                : rentedItems?.rentProperties
            }
            type={houseInfoType}
            setSelectedProperty={setSelectedProperty}
          />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
export default Rent;
