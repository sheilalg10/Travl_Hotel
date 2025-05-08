import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./roomSlice";
import bookingSlice from './bookingSlice';
import employeesSlice from "./employeesSlice";


const store = configureStore({
  reducer: {
    rooms: roomReducer,
    bookings: bookingSlice,
    employees: employeesSlice,
  },
});

export default store;
