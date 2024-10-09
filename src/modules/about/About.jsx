import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/patrick-perkins-3wylDrjxH-E-unsplash.jpg";
import teamMember1 from "../../assets/profile-pic.jpg";
import teamMember2 from "../../assets/profile-pic.jpg";
import teamMember3 from "../../assets/profile-pic.jpg";
import apartment from "../../assets/apartment.jpg";
import shop from "../../assets/store.jpg";
import findHouse from "../../assets/find-place.svg";
import TranspertentSofa from "../../assets/transpertent-sofa.png"
import discoverOptions from "../../assets/discover-option.svg";
import Guide from "../../assets/guide.svg";
import Service from "../../assets/services.svg";
import Home from "../../assets/transparent-img.png";
import Transition from "../../assets/Transition.svg";
import {
  FaHome,
  FaSearchDollar,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
import AgentsSection from "./AgentsSection";
import FurnitureServicesSection from "./FurnitureServicesSection";
import Slider from "react-slick/lib/slider";

function About() {
  return (
    <div className="bg-[#f3f4f6]">
      <div className="container">
        <HeroSection />
        <OurStorySection />
        <OurServicesSection />
        <FeaturedPropertySection />
        <FurnitureServicesSection/>
        <AgentsSection />
        <MeetOurTeamSection />
        <CallToActionSection />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#f3f4f6] min-h-screen flex flex-col justify-center items-center py-16">
      <div className="container px-4 mx-auto">
        <div className="p-8 bg-white rounded-3xl md:p-12">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <img
                src={Home}
                alt="find-house"
                className="w-full max-w-[480px] h-auto rounded-3xl mx-auto"
              />
            </div>
            <div className="flex flex-col justify-center order-1 md:order-2">
              <h1 className="mb-3 text-4xl font-bold md:text-5xl main-title">
                Find Your <span className="text-indigo-500">Dream Home</span>
              </h1>
              <p className="mb-6 text-lg text-gray-600 md:text-xl fm-txt">
                Whether renting or owning, we make it easy to find your perfect
                space
              </p>
              <a
                href="#our-story"
                className="inline-block px-8 py-3 font-semibold text-center text-white transition duration-300 bg-indigo-500 rounded-lg btn-font hover:bg-indigo-700">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function JourneyStep({
  stepNumber,
  title,
  description,
  illustration,
  isReversed,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center mb-16 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}>
      <div className="w-full mb-8 md:w-1/2 md:mb-0">
        <img
          src={illustration}
          alt={`Step ${stepNumber} illustration`}
          className="w-full h-auto max-w-sm mx-auto"
        />
      </div>
      <div
        className={`w-full md:w-1/2 ${isReversed ? "md:pr-12" : "md:pl-12"}`}>
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-full">
            <span className="text-2xl font-bold btn-font">{stepNumber}</span>
          </div>
          <h3 className="ml-4 text-xl font-bold md:text-2xl main-title">
            {title}
          </h3>
        </div>
        <p className="mb-4 text-sm text-gray-600 md:text-base fm-txt fs-6">
          {description}
        </p>
        <a
          href="#"
          className="text-sm text-indigo-500 transition duration-300 btn-font hover:text-indigo-600 md:text-base">
          Learn More
        </a>
      </div>
    </div>
  );
}

function OurStorySection() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#f3f4f6] py-16">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl main-title">
          Your Path to Home
        </h2>
        <div className="relative p-8 bg-white rounded-3xl">
          <div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-gray-200 md:block left-1/2 dashed-line"></div>
          <JourneyStep
            stepNumber="1"
            title="Discover Your Options"
            description="Explore our vast selection of rental and for-sale properties, carefully curated to match your unique preferences and budget requirements."
            illustration={discoverOptions}
            isReversed={false}
          />
          <JourneyStep
            stepNumber="2"
            title="Expert Guidance"
            description="Our experienced real estate professionals provide personalized advice and support, whether you're looking to rent, buy, or list your property for sale."
            illustration={Guide}
            isReversed={true}
          />
          <JourneyStep
            stepNumber="3"
            title="Seamless Transition"
            description="From handling paperwork to coordinating move-in details, we ensure a smooth process that transforms your chosen house into your new home with ease."
            illustration={Transition}
            isReversed={false}
          />
        </div>
      </div>
    </motion.div>
  );
}

function OurServicesSection() {
  const services = [
    {
      icon: <FaHome className="text-4xl text-indigo-500" />,
      title: "Find Your Dream Home",
      description:
        "Discover a wide range of properties tailored to your needs and preferences.",
    },
    {
      icon: <FaSearchDollar className="text-4xl text-indigo-500" />,
      title: "List Your Property",
      description:
        "Showcase your property to potential buyers or renters with ease.",
    },
    {
      icon: <FaHandshake className="text-4xl text-indigo-500" />,
      title: "Expert Guidance",
      description:
        "Receive personalized support from our experienced real estate professionals.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#f3f4f6] py-20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center main-title">
          Our Comprehensive Services
        </h2>
        <div className="p-8 bg-white rounded-3xl">
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between lg:items-start">
            <img
              src={Service}
              alt="Real Estate Services"
              className="w-full max-w-md mb-12 lg:mb-0 lg:w-1/3 lg:sticky lg:top-24"
            />
            <div className="w-full lg:w-2/3 lg:pl-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6 mb-8 transition-shadow duration-300 ">
                  <div className="flex items-center mb-4">
                    <div className="p-3 mr-4 bg-indigo-100 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold main-title">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 fm-txt fs-6">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function MeetOurTeamSection() {
  const team = [
    { name: "John Doe", role: "Founder & CEO", image: teamMember1 },
    { name: "Jane Smith", role: "Head of Operations", image: teamMember2 },
    { name: "Mike Johnson", role: "Lead Property Manager", image: teamMember3 },
  ];

  return (
    <section id="meet-our-team" className="bg-[#f3f4f6] py-20">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-4xl font-bold text-center main-title">
          Meet Our Exceptional Team
        </motion.h2>
        <div className="p-8 bg-white rounded-3xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 transition-all duration-300 transform bg-white border-black rounded-3xl hover:-translate-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 mx-auto mb-6 border-4 border-indigo-500 rounded-full shadow-md"
                />
                <h3 className="mb-2 text-2xl font-semibold main-title">
                  {member.name}
                </h3>
                <p className="mb-4 font-medium text-indigo-600 btn-font">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 fm-txt">
                  With years of experience in real estate,{" "}
                  {member.name.split(" ")[0]} brings expertise and passion to
                  our team.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="call-to-action"
      className="bg-[#f3f4f6] py-20">
      <div className="container px-4 mx-auto">
        <div className="p-8 bg-white rounded-3xl md:p-12">
          <div className="text-center">
            <FaHome className="mx-auto mb-6 text-5xl text-indigo-500" />
            <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl main-title">
              Ready to Find Your{" "}
              <span className="text-indigo-500">Dream Home</span>?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 fm-txt">
              Embark on your journey to the perfect space today. Our expert team
              is ready to guide you through every step of the process.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white transition duration-300 bg-indigo-500 rounded-lg btn-font hover:bg-indigo-600 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Get In Touch
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function FeaturedPropertySection() {
  const properties = [
    { title: "Luxury Apartment", image: apartment },
    { title: "Modern Shop Space", image: shop },
    { title: "Cozy Studio", image: "path/to/studio-image.jpg" },
    { title: "Spacious Family Home", image: "path/to/family-home-image.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#f3f4f6] py-20"
    >
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center main-title">
          Featured Properties
        </h2>
        <div className="p-8 bg-white rounded-3xl">
          <Slider {...settings}>
            {properties.map((property, index) => (
              <div key={index} className="px-2">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="overflow-hidden transition-all duration-300 transform bg-white border border-gray-200 rounded-3xl hover:-translate-y-2"
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold main-title">
                      {property.title}
                    </h3>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
}


export default About;
