import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  wishList: [],
};

const furnitureWishListSlice = createSlice({
  name: "furnitureWishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const { product } = action.payload;
      const existingProduct = state.wishList.find(
        (item) => item.id === product.id && item.type === product.type
      );

      if (!existingProduct) {
        state.wishList.push(product);
        toast.success(
          <span className="btn-font fs-6">product added to whish list</span>
        );
      } else {
        toast.info(
          <span className="btn-font fs-6">
            product already added to the wishlist
          </span>
        );
      }
    },

    removeFromWishList: (state, action) => {
      const { productId } = action.payload;
      state.wishList = state.wishList.filter(
        (product) => product.id !== productId
      );
      toast.error(
        <span className="btn-font fs-6">product removed from wish list</span>
      );
    },
  },
});

export const { addToWishList, removeFromWishList } =
  furnitureWishListSlice.actions;
export default furnitureWishListSlice.reducer;
