import { createSlice } from "@reduxjs/toolkit";
import { IPeople } from "../interfaces/IPeople.model";

const peopleSlice = createSlice({
  name: "people",
  initialState: [] as IPeople[],
  reducers: {
    setPeople: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
