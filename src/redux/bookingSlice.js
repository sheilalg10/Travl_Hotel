import { createSlice } from '@reduxjs/toolkit';
import bookingData from '../data/bookings.json';

const initialState = {
  data: bookingData
};

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
});

export default bookingSlice.reducer;
