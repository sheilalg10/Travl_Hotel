import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import datas from "../data/rooms.json";

const initialState = {
  data: JSON.parse(localStorage.getItem("rooms")) || [],
  loading: false,
  error: null,
};

export const fetchRoom = createAsyncThunk(
  "rooms/fetchRoom",
  async () => {
    const localstorage = localStorage.getItem("rooms");
    const response = localstorage ? JSON.parse(local) : datas;
    return response;
  }
);

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    addRoom: (state, action) => {
      if (!Array.isArray(state.data)) {
        state.data = [];
      }
      state.data.push(action.payload);
      localStorage.setItem("rooms", JSON.stringify(state.data));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoom.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRoom.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchRoom.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addRoom } = roomSlice.actions;
export default roomSlice.reducer;
