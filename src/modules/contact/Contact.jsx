import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaComments,
} from "react-icons/fa";
import Profile from "../../assets/profile-pic.jpg";
import Footer from "../footer/Footer";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const agents = [
    {
      name: "John Doe",
      role: "Senior Agent",
      phone: "+1 234 567 890",
      email: "john@realestate.com",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Property Specialist",
      phone: "+1 234 567 891",
      email: "jane@realestate.com",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Mike Johnson",
      role: "Commercial Expert",
      phone: "+1 234 567 892",
      email: "mike@realestate.com",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  return (
    <div>
      <div className="min-h-screen py-12 bg-[#f3f4f6]">
        <div className="container px-4 mx-auto">
          <h1 className="mb-12 text-4xl font-bold text-center text-gray-800 main-title fs-3">
            Contact Our Real Estate Experts
          </h1>
          <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-3">
            {agents.map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative overflow-hidden group">
                <div className="absolute inset-0 transition-transform duration-700 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl group-hover:scale-95"></div>
                <div className="relative z-10 p-6 transition-transform duration-700 bg-white rounded-3xl group-hover:scale-105">
                  <div className="relative mb-6 overflow-hidden rounded-full aspect-square">
                    <img
                      src={Profile}
                      alt={agent.name}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 transition-opacity duration-700 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100"></div>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-800 transition-colors duration-300 btn-font group-hover:text-indigo-700">
                    {agent.name}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-gray-600 custom-light">
                    {agent.role}
                  </p>
                  <div className="flex flex-col space-y-3">
                    <motion.a
                      href={`tel:${agent.phone}`}
                      className="flex items-center justify-center w-full px-4 py-2 text-white transition-all duration-300 bg-indigo-500 rounded-full mb-txt fs-6 group-hover:bg-indigo-700 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                      <FaPhone className="mr-2" />
                      {agent.phone}
                    </motion.a>
                    <motion.a
                      href={`mailto:${agent.email}`}
                      className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-indigo-500 transition-all duration-300 bg-white border-2 border-indigo-500 rounded-full btn-font group-hover:border-indigo-700 group-hover:text-indigo-700 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                      <FaEnvelope className="mr-2" />
                      {agent.email}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="object-cover w-full h-48 md:h-full md:w-48"
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Modern house"
                />
              </div>
              <div className="w-full p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}>
                  <h2 className="mb-6 text-3xl font-semibold text-gray-800 main-title">
                    Get in Touch
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-bold text-gray-700 fm-txt">
                        Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaUser className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full py-2 pl-10 pr-3 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-bold text-gray-700 fm-txt">
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaEnvelope className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full py-2 pl-10 pr-3 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block mb-2 text-sm font-bold text-gray-700 fm-txt">
                          Phone
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaPhone className="text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full py-2 pl-10 pr-3 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="propertyType"
                        className="block mb-2 text-sm font-bold text-gray-700 fm-txt">
                        Property Type
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaHome className="text-gray-400" />
                        </div>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full py-2 pl-10 pr-3 text-gray-700 bg-gray-100 rounded-lg fm-txt focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                          required>
                          <option value="">Select a property type</option>
                          <option value="house">House</option>
                          <option value="apartment">Apartment</option>
                          <option value="condo">Condo</option>
                          <option value="land">Land</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm text-gray-700 ">
                        Message
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-start pt-3 pl-3 pointer-events-none">
                          <FaComments className="text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full py-2 pl-10 pr-3 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                          rows="4"
                          required></textarea>
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 font-bold text-white transition duration-300 ease-in-out bg-indigo-500 rounded-lg btn-font hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                        type="submit">
                        Send Message
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactForm;
