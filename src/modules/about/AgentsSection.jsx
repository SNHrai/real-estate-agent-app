import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaPhone, FaBuilding } from "react-icons/fa";
import Slider from "react-slick";
import { motion } from "framer-motion";
import teamMember3 from "../../assets/profile-pic.jpg";

function AgentsSection() {
  const agents = [
    {
      name: "John Doe",
      image: "path/to/john-doe-image.jpg",
      experience: 5,
      location: "New York City",
      office: "Manhattan Realty",
      specialization: "Luxury Apartments",
    },
    {
      name: "John Doe",
      image: "path/to/john-doe-image.jpg",
      experience: 5,
      location: "New York City",
      office: "Manhattan Realty",
      specialization: "Luxury Apartments",
    },
    {
      name: "John Doe",
      image: "path/to/john-doe-image.jpg",
      experience: 5,
      location: "New York City",
      office: "Manhattan Realty",
      specialization: "Luxury Apartments",
    },
    // Add more agent objects here
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-[#f3f4f6]">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center main-title">Our Expert Agents</h2>
        <div className="p-4 sm:p-8 bg-white rounded-3xl">    
          <Slider {...settings} className="mx-auto">
            {agents.map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-2 py-4"
              >
                <div className="flex flex-col sm:flex-row overflow-hidden bg-white rounded-3xl">
                  <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
                    <img src={teamMember3} alt={agent.name} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col justify-between w-full sm:w-2/3 p-4 sm:p-6">
                    <div>
                      <div className="flex items-center mb-3 text-sm">   
                        <span className="text-gray-600 main-title fs-5">{agent.name} </span>
                      </div>
                      <div className="flex items-center mb-2 text-sm">
                        <FaBriefcase className="mr-2 text-indigo-500" />
                        <span className="text-gray-600 fm-txt">{agent.experience} years experience </span>
                      </div>
                      <div className="flex items-center mb-2 text-sm">
                        <FaMapMarkerAlt className="mr-2 text-indigo-500" />
                        <span className="text-gray-600 fm-txt">{agent.location} </span>
                      </div>
                      <div className="flex items-center mb-4 text-sm">
                        <FaBuilding className="mr-2 text-indigo-500" />
                        <span className="text-gray-600 fm-txt">{agent.office} </span>
                      </div>
                    </div>
                    <button className="flex items-center justify-center w-full py-2 text-white transition duration-300 bg-indigo-500 rounded-lg btn-font hover:bg-indigo-600">
                      <FaPhone className="mr-2" />
                      Contact Agent
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
  
}

export default AgentsSection;
