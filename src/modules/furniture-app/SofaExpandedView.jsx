import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaRulerCombined,
  FaCouch,
  FaHeart,
  FaTruck,
  FaTools,
  FaStar,
  FaPercent,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { BsBoxSeam, BsCreditCard, BsTagFill } from "react-icons/bs";
import SofaImg1 from "../../assets/sofa-img.jpg";
import SofaImg2 from "../../assets/sofa-img.jpg";
import SofaImg3 from "../../assets/bed-image.jpg";

function SofaExpandedView() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sofa = {
    id,
    name: "Luxurious Comfort Sofa",
    description:
      "Experience unparalleled comfort with our ergonomically designed sofa.",
    price: 59999,
    seating: "3-seater",
    dimensions: "220cm x 95cm x 85cm",
    material: "Premium Leather",
    comfort: "Extra plush cushions with memory foam",
    usage: "Perfect for modern living rooms and offices",
    maintenance: "Wipe clean with a damp cloth, avoid harsh chemicals",
    reviews: { rating: 4.8, count: 256 },
    delivery: {
      options: ["Home Delivery", "Self Pickup"],
      assembly: "Free assembly available",
    },
    stock: 5,
    offer: "10% off on pre-booking",
    emi: "No-cost EMI starting at ₹5,000/month",
    warranty: "5-year warranty on fabric and structure",
    offers: "currently no offers available for this product",
    images: [SofaImg1, SofaImg2, SofaImg3],
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sofa.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + sofa.images.length) % sofa.images.length
    );
  };

  return (
    <div className="bg-[#f3f4f6]">
      <div className="container px-4 py-16 mx-auto">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 mb-8 bg-white rounded-3xl sm:p-6 md:p-8 lg:p-12"> */}
          <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-3xl">
            <div className="relative h-64 md:h-80">
              <img
                src={sofa.images[currentImageIndex]}
                alt={`${sofa.name} - Image ${currentImageIndex + 1}`}
                className="object-cover w-full h-full"
              />
              <button
                onClick={prevImage}
                className="absolute p-1 transform -translate-y-1/2 bg-white rounded-full shadow-md left-2 top-1/2">
                <FaChevronLeft className="text-sm text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute p-1 transform -translate-y-1/2 bg-white rounded-full shadow-md right-2 top-1/2">
                <FaChevronRight className="text-sm text-gray-800" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-900 main-title">
                  {sofa.name}
                </h1>
                <div className="text-2xl font-bold text-indigo-600 btn-font">
                  ₹{sofa.price.toLocaleString()}
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-600 fm-txt">
                {sofa.description}
              </p>

              {/* <div className="flex items-center mb-4">
            <FaStar className="mr-1 text-yellow-400" />
            <span className="text-sm font-semibold">{sofa.reviews.rating}</span>
            <span className="ml-1 text-xs text-gray-600">({sofa.reviews.count} reviews)</span>
          </div> */}

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <FaCouch className="mr-2 text-sm text-indigo-500" />
                  <span className="text-sm fm-txt">{sofa.seating}</span>
                </div>
                <div className="flex items-center">
                  <FaRulerCombined className="mr-2 text-sm text-indigo-500" />
                  <span className="text-sm fm-txt">{sofa.dimensions}</span>
                </div>
                <div className="flex items-center">
                  <BsBoxSeam className="mr-2 text-sm text-indigo-500" />
                  <span className="text-sm fm-txt">{sofa.material}</span>
                </div>
                <div className="flex items-center">
                  <FaTruck className="mr-2 text-sm text-indigo-500" />
                  <span className="text-sm fm-txt">
                    {sofa.delivery.options[0]}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center px-3 py-1 text-xs bg-gray-100 rounded-full">
                  <BsCreditCard className="mr-1 text-indigo-500" />
                  <span>{sofa.emi}</span>
                </div>
                <div className="flex items-center px-3 py-1 text-xs bg-gray-100 rounded-full">
                  <FaTools className="mr-1 text-indigo-500" />
                  <span>{sofa.warranty}</span>
                </div>
                <div className="flex items-center px-3 py-1 text-xs bg-gray-100 rounded-full">
                  <BsTagFill className="mr-1 text-indigo-500" />
                  <span className="text-nowrap">{sofa.offers}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 text-sm font-semibold text-white transition duration-300 bg-indigo-600 rounded-lg btn-font hover:bg-indigo-700">
                  Buy now
                </button>
                <button className="flex-1 px-4 py-2 text-sm font-semibold text-gray-800 transition duration-300 bg-gray-200 rounded-lg text-nowrap btn-font hover:bg-gray-300">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        {/* </motion.div> */}
      </div>
    </div>
  );
}

export default SofaExpandedView;
