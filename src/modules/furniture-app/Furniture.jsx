import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaRupeeSign } from "react-icons/fa";
import SofaCard from "./SofaCard";
import BedCard from "./BedCard";
import WardrobeCard from "./WardrobeCard";
import Footer from "../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchFurnitureData } from "../../slice/FurnitureSlice";
import Slider from "react-slick";
import ComingSoon from "../../assets/undraw_under_construction.svg";
import Loader from "../../utils/loader/Loader";
import { addToWishList } from "../../slice/FurnitureWishListSlice";

const FurnitureCard = ({ type, item }) => {
  switch (type) {
    case "sofa":
      return <SofaCard item={item} />;
    case "bed":
      return <BedCard item={item} />;
    case "wardrobe":
      return <WardrobeCard item={item} />;
    default:
      return null;
  }
};

function Furniture() {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([5000, 100000]);
  const [selectedFurnitureType, setSelectedFurnitureType] = useState("all");
  const [furnitureType, setFurnitureType] = useState("furniture");
  const { items, status, error } = useSelector((state) => state.furniture);
  const [selectedMaterial, setSelectedMaterial] = useState("all");

  useEffect(() => {
    dispatch(fetchFurnitureData());
  }, [dispatch]);


  const locations = ["Sarvoday nagar", "Adiyogi infra"];
  const furnitureTypes = ["all", "sofa", "bed", "wardrobe"];
  const materialTypes = ["all", "fabric", "leather", "wood", "metal"];

  const filteredItems = useMemo(() => {
    if (!items) return [];
    return Object.entries(items).flatMap(([type, typeItems]) =>
      typeItems
        .filter(
          (item) =>
            (selectedFurnitureType === "all" ||
              type === selectedFurnitureType) &&
            (selectedMaterial === "all" ||
              item.material.toLowerCase() === selectedMaterial) &&
            (!selectedLocation || item.location === selectedLocation) &&
            item.price >= priceRange[0] &&
            item.price <= priceRange[1]
        )
        .map((item) => ({ type, ...item }))
    );
  }, [
    items,
    selectedFurnitureType,
    selectedMaterial,
    selectedLocation,
    priceRange,
  ]);

  const handlePriceChange = (index, value) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
  };

  if (status === "loading")
    return (
      <div>
        <Loader />
      </div>
    );
  if (status === "failed") return <div>Error: {error}</div>;

  const sliderSettings = {
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
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="bg-[#f3f4f6]">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 mb-8 bg-white rounded-3xl md:p-8 lg:p-12">
          <h3 className="mb-6 text-2xl font-bold main-title">
            Home Decor Choices{" "}
          </h3>
          <div className="flex justify-center space-x-4">
            <div className="p-4 toggle_container md:p-8 lg:p-12">
              <div className="w-64 lg:w-96 switches-container">
                <input
                  type="radio"
                  id="switchFurniture"
                  name="switchPlan"
                  value="furniture"
                  style={{ cursor: "pointer" }}
                  onChange={(e) => setFurnitureType(e.target.value)}
                  // onClick={() => setProviderDetails(comprehensive)}
                />
                <input
                  type="radio"
                  id="switchInterior"
                  name="switchPlan"
                  value="interior"
                  style={{ cursor: "pointer" }}
                  onChange={(e) => setFurnitureType(e.target.value)}
                  // onClick={() => setProviderDetails(thirdParty)}
                />
                <label
                  for="switchFurniture"
                  style={{
                    color:
                      furnitureType === "furniture" ? "#ffffff" : "rgb(0,0,0)",
                  }}
                  className="fm-txt">
                  {"furniture"}
                </label>
                <label
                  for="switchInterior"
                  style={{
                    color:
                      furnitureType === "interior" ? "#ffffff" : "rgb(0,0,0)",
                  }}
                  className="fm-txt">
                  {"interior"}
                </label>
                <div className="switch-wrapper">
                  <div className="switch"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {furnitureType === "furniture" ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 mb-8 bg-white rounded-3xl sm:p-6 md:p-8 lg:p-12">
              <h2 className="mb-6 text-2xl font-bold text-center main-title sm:text-3xl md:mb-8">
                Find Your Perfect Furniture
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                {/* Price Range Selector */}
                <div className="p-3 bg-white border border-gray-300 rounded-xl">
                  <span className="block mb-2 text-sm font-medium text-gray-700 btn-font">
                    Price Range
                  </span>
                  <div className="flex items-center space-x-4">
                    {[0, 1].map((index) => (
                      <React.Fragment key={index}>
                        <FaRupeeSign className="text-gray-400" />
                        <input
                          type="range"
                          min="5000"
                          max="100000"
                          value={priceRange[index]}
                          onChange={(e) =>
                            handlePriceChange(index, Number(e.target.value))
                          }
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
                          style={{
                            background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${
                              ((priceRange[index] - 5000) / 95000) * 100
                            }%, #e5e7eb ${
                              ((priceRange[index] - 5000) / 95000) * 100
                            }%, #e5e7eb 100%)`,
                          }}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="mt-2 text-sm text-gray-600 btn-font">
                    ₹{priceRange[0]} - ₹{priceRange[1]}
                  </div>
                </div>

                {/* Material Type Toggle */}
                <div className="p-3 bg-white border border-gray-300 rounded-xl">
                  <h3 className="mb-3 text-sm font-medium text-gray-700 btn-font">
                    Material Type
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {materialTypes.map((material) => (
                      <button
                        key={material}
                        onClick={() => setSelectedMaterial(material)}
                        className={`px-4 btn-font py-2 rounded-lg transition duration-300 ${
                          selectedMaterial === material
                            ? "bg-indigo-500 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}>
                        {material.charAt(0).toUpperCase() + material.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Furniture Type Toggle */}
              <div className="mt-6">
                <h3 className="mb-3 text-lg font-semibold main-title">
                  Furniture Type
                </h3>
                <div className="flex flex-wrap gap-2">
                  {furnitureTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedFurnitureType(type)}
                      className={`px-4 btn-font py-2 rounded-lg transition duration-300 ${
                        selectedFurnitureType === type
                          ? "bg-indigo-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Furniture Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-4 bg-white rounded-3xl sm:p-6 md:p-8 lg:p-12">
              {selectedFurnitureType === "all" ? (
                Object.entries(items).map(([type, typeItems]) => (
                  <div key={type} className="mb-8">
                    <h3 className="mb-4 text-xl font-bold main-title sm:text-2xl sm:mb-6">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </h3>
                    <Slider {...sliderSettings}>
                      {typeItems.map((item, index) => (
                        <div key={`${type}-${index}`} className="px-2">
                          <FurnitureCard type={type} item={item} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                ))
              ) : (
                <Slider {...sliderSettings}>
                  {items[selectedFurnitureType].map((item, index) => (
                    <div
                      key={`${selectedFurnitureType}-${index}`}
                      className="px-2">
                      <FurnitureCard type={selectedFurnitureType} item={item} />
                    </div>
                  ))}
                </Slider>
              )}
            </motion.div>
          </>
        ) : (
          <>
            <h1 className="font-bold amt fs-1">Interior</h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-col p-4 m-auto mb-8 bg-white rounded-3xl md:p-8 lg:p-12 d-flex align-items-center">
              <div className="m-auto d-flex align-items-center">
                <img
                  src={ComingSoon}
                  alt="coming-soon-image"
                  className="justify-center h-64 d-flex align-items-center"
                />
              </div>
            </motion.div>
            <h1 className="mt-3 font-bold amt fs-1">Coming Soon..</h1>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Furniture;
