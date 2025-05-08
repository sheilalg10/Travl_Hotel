import { createSlice } from "@reduxjs/toolkit";
import employeesData from "../data/employees.json";

const initialState = {
  data: employeesData,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
