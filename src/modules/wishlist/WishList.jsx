import React, { useState } from "react";
import { motion } from "framer-motion";
import PropertyWishList from "./PropertyWishList";
import FurnitureWishList from "./FurnitureWishList";

function WishList() {
  const [wishListType, setWishListType] = useState("property");

  return (
    <div className="bg-[#f3f4f6]">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 mb-8 bg-white rounded-3xl md:p-8 lg:p-12">
          <h3 className="mb-6 text-2xl font-bold main-title">Your Wishlist</h3>
          <div className="flex justify-center space-x-4">
            <div className="p-4 toggle_container md:p-8 lg:p-12">
              <div className="w-64 lg:w-96 switches-container">
                <input
                  type="radio"
                  id="switchProperty"
                  name="switchPlan"
                  value="property"
                  style={{ cursor: "pointer" }}
                  onChange={(e) => setWishListType(e.target.value)}
                />
                <input
                  type="radio"
                  id="switchFurniture"
                  name="switchPlan"
                  value="furniture"
                  style={{ cursor: "pointer" }}
                  onChange={(e) => setWishListType(e.target.value)}
                />
                <label
                  htmlFor="switchProperty"
                  style={{
                    color:
                      wishListType === "property" ? "#ffffff" : "rgb(0,0,0)",
                  }}
                  className="fm-txt">
                  Property
                </label>
                <label
                  htmlFor="switchFurniture"
                  style={{
                    color:
                      wishListType === "furniture" ? "#ffffff" : "rgb(0,0,0)",
                  }}
                  className="fm-txt">
                  Furniture
                </label>
                <div className="switch-wrapper">
                  <div className="switch"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {wishListType === "property" ? (
        //   <motion.div
        //     initial={{ opacity: 0, y: 20 }}
        //     animate={{ opacity: 1, y: 0 }}
        //     transition={{ duration: 0.5, delay: 0.2 }}
        //     className="p-4 mb-8 bg-white rounded-3xl md:p-8 lg:p-12">
            <PropertyWishList />
        //   </motion.div>
        ) : (
          <FurnitureWishList />
        )}
      </div>
    </div>
  );
}

export default WishList;
