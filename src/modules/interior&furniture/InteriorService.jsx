import React from "react";
import { motion } from "framer-motion";
import {
  FaCouch,
  FaPaintBrush,
  FaRuler,
  FaArrowRight,
  FaHome,
  FaTools,
  FaShoppingCart,
} from "react-icons/fa";
import heroImage from "../../assets/hero-img-interior-removebg-preview.png";
import bedRoom from "../../assets/bedroom-removebg-preview.png";
import livingRoom from "../../assets/living-room-removebg-preview.png";
import Sofa from "../../assets/room-with-blank-wall-normal__1_-removebg-preview.png";
import armchair from "../../assets/armchair.png";
import interior from "../../assets/interior-design-img-removebg-preview.png";
import furnitur1 from "../../assets/furniture/furniture1.png";
import furnitur2 from "../../assets/furniture/furniture2.png";
import furnitur3 from "../../assets/furniture/furniture3.png";
import furnitur4 from "../../assets/furniture/furniture4.png";
import furnitur5 from "../../assets/furniture/furniture5.png";
import furnitur6 from "../../assets/furniture/furniture6.png";
import furnitur7 from "../../assets/furniture/furniture7.png";
import furnitur8 from "../../assets/furniture/furniture8.png";
// import designProcess from "../../assets/design-process.svg";
// import furnitureShowcase from "../../assets/furniture-showcase.svg";
// import customSolutions from "../../assets/custom-solutions.svg";

function InteriorServices() {
  return (
    <div className="bg-[#f3f4f6]">
      <div className="container">
        <HeroSection />
        <OurApproachSection />
        <ServicesSection />
        <DesignProcessSection />
        <FurnitureShowcaseSection />
        <CustomSolutionsSection />
        <TestimonialsSection />
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
                src={heroImage}
                alt="Interior Design"
                className="w-full max-w-[380px] h-auto rounded-3xl mx-auto"
              />
            </div>
            <div className="flex flex-col justify-center order-1 md:order-2">
              <h1 className="mb-3 text-4xl font-bold md:text-5xl main-title">
                Transform Your{" "}
                <span className="text-indigo-500">Living Space</span>
              </h1>
              <p className="mb-6 text-lg text-gray-600 md:text-xl fm-txt">
                Elevate your home with our expert interior design and premium
                furniture solutions
              </p>
              <a
                href="#our-approach"
                className="inline-block px-8 py-3 font-semibold text-center text-white transition duration-300 bg-indigo-500 rounded-lg btn-font hover:bg-indigo-700">
                Discover Our Approach
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function OurApproachSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#f3f4f6] py-16">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl main-title">
          Our Approach to Interior Excellence
        </h2>
        <div className="p-8 bg-white rounded-3xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaHome />,
                title: "Personalized Design",
                description:
                  "Tailored solutions that reflect your unique style and needs.",
              },
              {
                icon: <FaTools />,
                title: "Expert Craftsmanship",
                description:
                  "High-quality workmanship in every aspect of your interior.",
              },
              {
                icon: <FaShoppingCart />,
                title: "Curated Selection",
                description: "Access to exclusive furniture and decor pieces.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-indigo-500 rounded-full">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold main-title">
                  {item.title}
                </h3>
                <p className="text-gray-600 fm-txt">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ServicesSection remains the same

function DesignProcessSection() {
  const steps = [
    {
      title: "Consultation",
      description:
        "We start with a detailed discussion of your vision and requirements.",
    },
    {
      title: "Concept Development",
      description: "Our designers create initial concepts based on your input.",
    },
    {
      title: "Refinement",
      description: "We refine the designs based on your feedback.",
    },
    {
      title: "Implementation",
      description: "Our expert team brings the design to life in your space.",
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
          Our Design Process
        </h2>
        <div className="p-8 bg-white rounded-3xl">
          <div className="flex flex-col lg:flex-row items-center">
            <img
              src={Sofa}
              alt="Design Process"
              className="w-full lg:w-1/2 mb-8 lg:-mb-10"
            />
            <div className="w-full lg:w-1/2 lg:pl-12">
              {steps.map((step, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 main-title">{`${
                    index + 1
                  }. ${step.title}`}</h3>
                  <p className="text-gray-600 fm-txt">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function FurnitureShowcaseSection() {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-[#f3f4f6] py-20">
        <div className="container px-4 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center main-title">
            Furniture Showcase
          </h2>
          <div className="p-8 bg-white rounded-3xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src={furnitur4}
                  alt="Furniture Showcase"
                  className="w-full ml-[-100px] h-auto rounded-lg object-cover max-w-md"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4 main-title">
                  Curated Collections
                </h3>
                <p className="text-gray-600 mb-6 fm-txt">
                  Explore our carefully curated furniture collections, designed to
                  elevate your living spaces with style and comfort.
                </p>
                <ul className="list-disc list-inside text-gray-600 fm-txt">
                  <li>Contemporary designs</li>
                  <li>Classic elegance</li>
                  <li>Eco-friendly options</li>
                  <li>Custom-made pieces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }
  

function CustomSolutionsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#f3f4f6] py-20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center main-title">
          Custom Solutions
        </h2>
        <div className="p-8 bg-white rounded-3xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
              <h3 className="text-2xl font-semibold mb-4 main-title">
                Tailored to Your Needs
              </h3>
              <p className="text-gray-600 mb-6 fm-txt">
                Our custom solutions are designed to perfectly fit your space
                and style preferences. From bespoke furniture to unique interior
                elements, we bring your vision to life.
              </p>
              <button className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-indigo-500 rounded-lg btn-font hover:bg-indigo-600">
                Learn More
                <FaArrowRight className="ml-2" />
              </button>
            </div>

            <img
              src={livingRoom}
              alt="Custom Solutions"
              className="w-full lg:w-1/2 rounded-lg"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah J.",
      text: "The interior design team transformed my space beyond my expectations. Truly amazing work!",
    },
    {
      name: "Michael R.",
      text: "The furniture selection process was seamless, and the pieces fit perfectly in my new home.",
    },
    {
      name: "Emily L.",
      text: "I'm impressed by the attention to detail and the quality of service. Highly recommended!",
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
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-3xl">
              <p className="mb-4 text-gray-600 italic fm-txt">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-indigo-500">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: <FaCouch className="text-4xl text-indigo-500" />,
      title: "Furniture Selection",
      description:
        "Curate the perfect pieces to complement your space and lifestyle.",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-indigo-500" />,
      title: "Interior Styling",
      description:
        "Create cohesive and stunning interiors that reflect your personality.",
    },
    {
      icon: <FaRuler className="text-4xl text-indigo-500" />,
      title: "Space Planning",
      description:
        "Optimize your layout for both functionality and aesthetics.",
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
          Our Interior Design Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white rounded-3xl">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 bg-indigo-100 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold main-title">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 fm-txt">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
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
              Ready to Transform Your{" "}
              <span className="text-indigo-500">Living Space</span>?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 fm-txt">
              Let our expert team guide you through the process of creating your
              dream interior. From concept to completion, we're here to bring
              your vision to life.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white transition duration-300 bg-indigo-500 rounded-lg btn-font hover:bg-indigo-600 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Get Started
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default InteriorServices;
