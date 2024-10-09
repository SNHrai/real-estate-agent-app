import React, { useState } from "react";
import { FaUpload, FaPlus, FaHome, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Selling.css";
import uploadImage from "../../assets/upload-image.svg";
import addressSvg from "../../assets/address.svg";
import viewDetails from "../../assets/review-doc.svg";
import sellHouse from "../../assets/house-sell.svg";
import addDetails from "../../assets/add-info.svg";
import authenticate from "../../assets/authenticate-user.svg";
import formfillStepsDetailsImage from "../../assets/5-steps-deatils.svg";
import Footer from "../footer/Footer";

const steps = [
  "Property Details",
  "Location",
  "Images",
  "Review",
  "Authenticate",
];

const Selling = () => {
  const [formData, setFormData] = useState({
    type: "",
    status: "",
    areaSqFit: "",
    rooms: "",
    bathrooms: "",
    price: "",
    address: "",
    images: [],
    location: { lat: 51.505, lng: -0.09 },
    submitterType: "Customer",
    agentCode: "",
    customerName: "",
    customerMobile: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const updatedImages = [...formData.images, ...files];
    setFormData({ ...formData, images: updatedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.submitterType === "agent") {
      // Check if the agent code is correct (you should replace this with your actual validation logic)
      if (formData.agentCode !== "secretcode123") {
        alert("Invalid agent code. Please try again.");
        return;
      }
    }
    console.log(formData);
    // Here you would typically send the data to your backend
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        setFormData({ ...formData, location: e.latlng });
      },
    });

    return formData.location ? <Marker position={formData.location} /> : null;
  };

  return (
    <>
      <div className="min-h-screen py-12 bg-[#f3f4f6] bg-no-repeat bg-right-top">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center mb-12">
            <FaHome className="w-12 h-12 mb-1 mr-4 text-indigo-500 " />
            <h1 className="font-bold text-gray-800 fs-1 md:fs-3 main-title text-nowrap">
              Sell Your Property
            </h1>
            <p className="mt-2 text-gray-600 btn-font fs-6">
              Easy 5 Steps to Sell Your Property
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-2xl">
            <div className="p-8">
              <div className="mb-8">
                <div className="flex justify-between">
                  {steps.map((step, index) => (
                    <div key={step} className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full main-title ${
                          index <= currentStep ? "bg-indigo-500" : "bg-gray-300"
                        } flex items-center justify-center text-white font-bold`}>
                        {index + 1}
                      </div>
                      {/* <span className="mt-2 text-sm">{step}</span> */}
                    </div>
                  ))}
                </div>
                <div className="h-2 mt-4 bg-gray-200 rounded-full">
                  <div
                    className="h-full transition-all duration-300 bg-indigo-500 rounded-full"
                    style={{
                      width: `${((currentStep + 1) / steps.length) * 100}%`,
                    }}></div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {currentStep === 0 && (
                    <>
                      <div className="justify-center d-flex align-items-center">
                        <span className="main-title fs-3">
                          {"Property Details"}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="type"
                            className="block mb-2 text-sm font-bold text-gray-700 fm-txt">
                            Property Type
                            <FaInfoCircle
                              className="inline-block ml-1 text-blue-500"
                              data-tooltip-id="type-tooltip"
                            />
                          </label>
                          <Tooltip
                            id="type-tooltip"
                            place="top"
                            effect="solid"
                            className="main-title">
                            Select the type of property you're selling
                          </Tooltip>
                          <select
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-lg fm-txt focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                            required>
                            <option value="">Select a property type</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                            <option value="condo">Condo</option>
                            <option value="land">Land</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="status"
                            className="block mb-2 text-sm font-bold text-gray-700 fm-txt">
                            Property Status
                            <FaInfoCircle
                              className="inline-block ml-1 text-blue-500"
                              data-tooltip-id="status-tooltip"
                            />
                          </label>
                          <Tooltip
                            id="status-tooltip"
                            place="top"
                            effect="solid">
                            Indicate the current status of your property
                          </Tooltip>
                          <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-lg fm-txt focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                            required>
                            <option value="">Select a status</option>
                            <option value="available">Available</option>
                            <option value="under-contract">
                              Under Contract
                            </option>
                            <option value="sold">Sold</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div>
                          <label
                            htmlFor="areaSqFt"
                            className="block mb-2 text-sm font-bold text-gray-700 fm-txt">
                            Area (sq. ft.)
                          </label>
                          <input
                            type="number"
                            id="areaSqFt"
                            name="areaSqFt"
                            value={formData.areaSqFt}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-lg btn-font focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="rooms"
                            className="block mb-2 text-sm font-bold text-gray-700 fm-txt">
                            Rooms
                          </label>
                          <input
                            type="number"
                            id="rooms"
                            name="rooms"
                            value={formData.rooms}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-lg btn-font focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="bathrooms"
                            className="block mb-2 text-sm font-bold text-gray-700 fm-txt">
                            Bathrooms
                          </label>
                          <input
                            type="number"
                            id="bathrooms"
                            name="bathrooms"
                            value={formData.bathrooms}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-lg btn-font focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="price"
                          className="block mb-2 text-sm font-bold text-gray-700 btn-font fm-txt">
                          Price
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm btn-font">₹</span>
                          </div>
                          <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full py-2 pl-10 pr-3 text-gray-700 bg-gray-100 rounded-lg btn-font focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}
                  {currentStep === 1 && (
                    <>
                      <div className="justify-center d-flex align-items-center">
                        <span className="main-title fs-3">{"Location"}</span>
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block mb-2 text-sm font-bold text-gray-700 fm-txt">
                          Address
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-lg btn-font focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                          rows="3"
                          required></textarea>
                      </div>
                      <div className="h-64">
                        <MapContainer
                          center={formData.location}
                          zoom={13}
                          scrollWheelZoom={false}
                          style={{ height: "100%", width: "100%" }}>
                          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                          <LocationMarker />
                        </MapContainer>
                      </div>
                    </>
                  )}
                  {currentStep === 2 && (
                    <>
                      <div className="justify-center d-flex align-items-center">
                        <span className="main-title fs-3">
                          {"Upload Images"}
                        </span>
                      </div>
                      <div>
                        <label
                          htmlFor="images"
                          className="block mb-2 text-sm font-bold text-gray-700 fm-txt">
                          Upload Images
                        </label>
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="images-upload"
                            className="flex flex-col items-center justify-center w-full h-64 transition duration-300 ease-in-out border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <FaUpload className="w-10 h-10 mb-3 text-blue-500" />
                              <p className="mb-2 text-sm text-gray-500 truncate fm-txt">
                                <span className="font-semibold">
                                  Click to upload or drag and drop{" "}
                                </span>
                              </p>
                              <p className="text-xs text-gray-500 fm-txt">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p>
                            </div>
                            <input
                              id="images-upload"
                              name="images-upload"
                              type="file"
                              className="hidden"
                              multiple
                              onChange={handleImageUpload}
                            />
                          </label>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                          {formData.images.map((image, index) => (
                            <motion.div
                              key={index}
                              className="relative"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}>
                              <img
                                src={URL.createObjectURL(image)}
                                alt={`Preview ${index}`}
                                className="object-cover w-full h-32 rounded-lg"
                              />
                              <button
                                type="button"
                                className="absolute flex items-center justify-center w-6 h-6 text-white transition duration-300 bg-red-500 rounded-full btn-font top-1 right-1 hover:bg-red-600"
                                onClick={() => {
                                  const updatedImages = formData.images.filter(
                                    (_, i) => i !== index
                                  );
                                  setFormData({
                                    ...formData,
                                    images: updatedImages,
                                  });
                                }}>
                                <FaPlus className="transform rotate-45" />
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden bg-white rounded-3xl">
                      <div className="px-6 py-8">
                        <h2 className="mb-6 text-3xl font-bold text-gray-800 main-title">
                          Review Your Property Details
                        </h2>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <div className="p-4 bg-gray-50 rounded-xl">
                            <h3 className="mb-4 text-xl font-semibold text-indigo-600 main-title">
                              Property Information
                            </h3>
                            <p className="mb-2 fm-txt">
                              <strong>Type:</strong> {formData.type}
                            </p>
                            <p className="mb-2 fm-txt">
                              <strong>Status:</strong> {formData.status}
                            </p>
                            <p className="mb-2 fm-txt">
                              <strong>Area:</strong> {formData.areaSqFt} sq. ft.
                            </p>
                            <p className="mb-2 fm-txt">
                              <strong>Rooms:</strong> {formData.rooms}
                            </p>
                            <p className="mb-2 fm-txt">
                              <strong>Bathrooms:</strong> {formData.bathrooms}
                            </p>
                            <p className="fm-txt">
                              <strong>Price:</strong> ₹{formData.price}
                            </p>
                          </div>

                          <div className="p-4 bg-gray-50 rounded-xl">
                            <h3 className="mb-4 text-xl font-semibold text-indigo-600 main-title">
                              Location
                            </h3>
                            <p className="fm-txt">{formData.address}</p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h3 className="mb-4 text-xl font-semibold text-indigo-600 main-title">
                            Property Images
                          </h3>
                          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                            {formData.images.map((image, index) => (
                              <img
                                key={index}
                                src={URL.createObjectURL(image)}
                                alt={`Property ${index + 1}`}
                                className="object-cover w-full h-32 rounded-lg shadow-md"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="p-4 mt-6 bg-gray-50 rounded-xl">
                          <h3 className="mb-4 text-xl font-semibold text-indigo-600 main-title">
                            Submitter Information
                          </h3>
                          <p className="mb-2 fm-txt">
                            <strong>Type:</strong>{" "}
                            {formData.submitterType === "agent"
                              ? "Agent"
                              : "Customer"}
                          </p>
                          {formData.submitterType === "customer" && (
                            <>
                              <p className="mb-2 fm-txt">
                                <strong>Name:</strong> {formData.customerName}
                              </p>
                              <p className="fm-txt">
                                <strong>Mobile:</strong>{" "}
                                {formData.customerMobile}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {currentStep === 4 && (
                    <>
                      <div className="justify-center d-flex align-items-center">
                        <span className="main-title fs-3">
                          {"Authenticate"}
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="toggle_container">
                          <div className="w-96">
                            <div className="switches-container">
                              <input
                                type="radio"
                                id="switchCustomer"
                                name="switchPlan"
                                value="Customer"
                                style={{ cursor: "pointer" }}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    submitterType: e.target.value,
                                  })
                                }
                                // onClick={() => setProviderDetails(comprehensive)}
                              />
                              <input
                                type="radio"
                                id="switchAgent"
                                name="switchPlan"
                                value="Agent"
                                style={{ cursor: "pointer" }}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    submitterType: e.target.value,
                                  })
                                }
                                // onClick={() => setProviderDetails(thirdParty)}
                              />
                              <label
                                for="switchCustomer"
                                style={{
                                  color:
                                    formData.submitterType === "Customer"
                                      ? "#ffffff"
                                      : "rgb(0,0,0)",
                                }}
                                className="fm-txt">
                                {"Party"}
                              </label>
                              <label
                                for="switchAgent"
                                style={{
                                  color:
                                    formData.submitterType === "Agent"
                                      ? "#ffffff"
                                      : "rgb(0,0,0)",
                                }}
                                className="fm-txt">
                                {"Agent"}
                              </label>
                              <div className="switch-wrapper">
                                <div className="switch"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {formData.submitterType === "Agent" ? (
                        <div>
                          <label
                            htmlFor="agentCode"
                            className="block mb-2 text-sm font-bold text-gray-700 fm-txt text-add">
                            Agent Code
                          </label>
                          <input
                            type="password"
                            id="agentCode"
                            name="agentCode"
                            value={formData.agentCode}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      ) : (
                        <>
                          <div className="mb-4">
                            <label
                              htmlFor="customerName"
                              className="block mb-2 text-sm font-bold text-gray-700 fm-txt text-add">
                              Name
                            </label>
                            <input
                              type="text"
                              id="customerName"
                              name="customerName"
                              value={formData.customerName}
                              onChange={handleChange}
                              className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="customerMobile"
                              className="block mb-2 text-sm font-bold text-gray-700 fm-txt text-add">
                              Mobile Number
                            </label>
                            <input
                              type="tel"
                              id="customerMobile"
                              name="customerMobile"
                              value={formData.customerMobile}
                              onChange={handleChange}
                              className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>
                        </>
                      )}
                    </>
                  )}

                  <div className="flex justify-between">
                    {currentStep > 0 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-gray-500 rounded-lg btn-font hover:bg-gray-600 focus:outline-none focus:shadow-outline">
                        Previous
                      </button>
                    )}
                    {currentStep < steps.length - 1 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-indigo-500 rounded-lg btn-font hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-green-500 rounded-lg btn-font hover:bg-green-600 focus:outline-none focus:shadow-outline">
                        Submit
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Selling;
