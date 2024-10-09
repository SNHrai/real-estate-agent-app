import React from "react";
import { motion } from "framer-motion";
import { FaRulerCombined, FaCouch, FaHeart } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { Link } from "react-router-dom";
import SofaImg from "../../assets/sofa-img.jpg";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../slice/FurnitureWishListSlice";

function SofaCard({ item }) {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-2 sm:p-4">
      {/* <Link to={`/sofa/${item.id}`} className="block"> */}
        <div className="overflow-hidden bg-white rounded-2xl">
          <div className="relative h-40 sm:h-48">
            <img
              src={SofaImg}
              alt={item.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute flex space-x-1 top-2 left-2">
              <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full fm-txt">
                {"Available"}
              </span>
            </div>
            <button
              className="absolute p-2 text-red-500 transition-colors duration-300 bg-white rounded-full top-2 right-2 hover:bg-red-100"
              onClick={() =>
                dispatch(
                  addToWishList({
                    product: {
                      id: item?.id,
                      image: null,
                      name: item?.name,
                      price: item?.price,
                      type:'sofa'
                    },
                  })
                )
              }>
              <FaHeart />
            </button>
          </div>
          <div className="p-3 sm:p-4">
            <h3 className="mb-1 text-base font-bold text-gray-800 truncate sm:text-lg main-title">
              {item.name}
            </h3>
            <p className="mb-2 text-xs text-gray-600 truncate sm:text-sm fm-txt">
              {item.description}
            </p>
            <div className="flex flex-wrap items-center justify-between mb-2">
              <div className="flex space-x-2 sm:space-x-4">
                <div className="flex items-center">
                  <FaCouch className="mr-1 text-sm text-indigo-500" />
                  <span className="text-xs text-gray-600 sm:text-sm fm-txt">
                    {item.seating}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaRulerCombined className="mr-1 text-sm text-indigo-500" />
                  <span className="text-xs text-gray-600 sm:text-sm fm-txt">
                    {item.dimensions || "N/A"}
                  </span>
                </div>
                <div className="flex items-center">
                  <BsBoxSeam className="mr-1 text-sm text-indigo-500" />
                  <span className="text-xs text-gray-600 sm:text-sm fm-txt">
                    {item.material}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between">
              <div className="w-full mb-2 text-xl font-bold text-indigo-600 btn-font">
                ₹{item.price}
              </div>
              <div className="grid w-full grid-cols-2 gap-2">
                <Link
                  to="/checkout"
                  className="px-3 py-1 text-sm text-center text-white transition duration-300 bg-indigo-500 rounded-lg btn-font hover:bg-indigo-600">
                  Buy Now
                </Link>
                <Link
                  to={`/sofa/${item.id}`}
                  className="px-3 py-1 text-sm text-center text-indigo-600 transition duration-300 bg-white border border-indigo-500 rounded-lg btn-font hover:bg-indigo-100 text-nowrap">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      {/* </Link> */}
    </motion.div>
  );
}

export default SofaCard;
