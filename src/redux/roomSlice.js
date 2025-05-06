import { createSlice } from '@reduxjs/toolkit';
import roomsData from '../data/rooms.json';

const initialState = {
  data: roomsData
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    addRoom: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addRoom } = roomsSlice.actions;
export default roomsSlice.reducer;
