import { configureStore } from '@reduxjs/toolkit';
import furnitureSlice from '../slice/FurnitureSlice.jsx'
import FurnitureWishListSlice from '../slice/FurnitureWishListSlice.jsx';
import rentedPropertySlice from "../slice/RentPropertySlice.jsx";
import ownedPropertySlice from "../slice/OwnedPropertySlice.jsx";

const store = configureStore({
  reducer: {
    furniture: furnitureSlice,
    furnitureWishList:FurnitureWishListSlice,
    rentedProperty: rentedPropertySlice,
    ownedProperties: ownedPropertySlice
  },
});

export default store;
