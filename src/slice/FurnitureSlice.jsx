import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const fetchFurnitureData = createAsyncThunk(
    'furniture/fetchFurnitureData',
    async () => {
      console.log("calling fetchFurnitureData function ")
      const response = await fetch('/data/furniture-data.json');
      const data = await response.json();
      console.log("from reducer slice data", data);
      return data;
    }
  );

  

const furnitureSlice = createSlice({
  name: 'furniture',
  initialState: {
    items: {},
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFurnitureData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFurnitureData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchFurnitureData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default furnitureSlice.reducer;
