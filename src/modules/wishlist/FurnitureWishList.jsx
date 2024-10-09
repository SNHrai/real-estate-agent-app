import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import sofaImg from "../../assets/sofa-img.jpg";
import { useDispatch, useSelector } from "react-redux";
import wishlistImg from "../../assets/wishlist.svg";
import { removeFromWishList } from "../../slice/FurnitureWishListSlice";

function FurnitureWishList() {
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.furnitureWishList);

  const onClickHandler = (id) => {
    dispatch(removeFromWishList({ productId: id }));
  };

  return (
    <>
      {wishList.length >= 1 ? (
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishList.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden bg-white rounded-3xl">
                <div className="relative h-48">
                  <img
                    src={sofaImg}
                    alt={property.title}
                    className="object-cover w-full h-full"
                  />
                  {/* <div className="absolute flex space-x-1 top-2 left-2">
                    <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full fm-txt">
                      {property.status}
                    </span>
                    <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full fm-txt">
                      {property.type}
                    </span>
                  </div> */}
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold text-gray-800 truncate main-title">
                    {property.name}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xl font-bold text-indigo-600 btn-font">
                      ₹{property.price}
                    </div>
                    <button
                      onClick={() => onClickHandler(property.id)}
                      className="flex items-center px-3 py-1 text-sm text-white transition duration-300 bg-red-500 rounded-lg btn-font hover:bg-red-600">
                      <FaTrash className="mr-2" />
                      Remove
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      console.log(`Contact agent for property ${property.id}`)
                    }
                    className="flex items-center justify-center w-full px-3 py-2 text-sm text-white transition duration-300 bg-indigo-500 rounded-lg btn-font hover:bg-indigo-600">
                    <FaShoppingCart className="mr-2" />
                    Buy now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-4 bg-white rounded-3xl sm:p-6 md:p-8 lg:p-12">
              <img
                src={wishlistImg}
                alt="coming-soon-image"
                className="object-cover w-[50%] h-[50%] m-auto"
              />

              <h1 className="mt-6 text-2xl font-bold text-center text-gray-800 amt md:text-3xl lg:text-4xl">
                No item added yet
              </h1>
            </motion.div>
            {/* <h1 className="mt-3 text-2xl font-bold text-center text-gray-800 md:text-3xl lg:text-4xl">
              No item added yet
            </h1> */}
          </>
        </>
      )}
    </>
  );
}

export default FurnitureWishList;
