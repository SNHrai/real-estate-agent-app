import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOwnedPropertyData = createAsyncThunk(
  "ownedProperties/fetchOwnedPropertyData",
  async () => {
    console.log("calling fetchOwnedPropertyData function ")
    const response = await fetch('/data/owned-apartment-data.json');
    const data = await response.json();
    console.log("data", data);
    return data;
  }
);

// export const fetchRentedPropertyData = createAsyncThunk(
//   "rentedProperty/fetchRentedPropertyData",
//   async () => {
//     console.log("inside function fetchRentedPropertyData ()");
//     const response = await fetch("/data/rent-apartment-data.json");
//     const data = await response.json();
//     return data;
//   }
// );

const ownedPropertySlice = createSlice({
    name:'ownedProperties',
    initialState : {
        ownedProperty : {},
        propertiesStatus: 'ideal',
        propertyError:null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchOwnedPropertyData.pending, (state) => {
          state.propertiesStatus = "loading";
        })
        .addCase(fetchOwnedPropertyData.fulfilled, (state, action) => {
          state.propertiesStatus = "succeeded";
          state.ownedProperty = action.payload;
        })
        .addCase(fetchOwnedPropertyData.rejected, (state, action) => {
          state.propertiesStatus = "failed";
          state.propertyError = action.error.message;
        });
    },
})


export default ownedPropertySlice.reducer;