import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRentedPropertyData = createAsyncThunk(
  "rentedProperty/fetchRentedPropertyData",
  async () => {
    console.log("inside function fetchRentedPropertyData ()");
    const response = await fetch("/data/rent-apartment-data.json");
    const data = await response.json();
    return data;
  }
);

const rentedPropertySlice = createSlice({
  name: "rentedProperty",
  initialState: {
    rentedItems: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRentedPropertyData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRentedPropertyData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rentedItems = action.payload;
      })
      .addCase(fetchRentedPropertyData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default rentedPropertySlice.reducer;
