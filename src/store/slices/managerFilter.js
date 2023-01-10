import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activ: {
    yes: false,
    no: false,
  },
  verif: {
    yes: false,
    no: false,
  },
};

export const managerFilterSlice = createSlice({
  name: "managerFilter",
  initialState,
  reducers: {
    delFltr: (state) => {
      state.activ = { yes: false, no: false };
      state.verif = { yes: false, no: false };
    },
    activSelect: (state, payload) => {
      console.log(payload.payload)
      state.activ[payload.payload.type]= !state.activ[payload.payload.type];
    },
    verifSelect: (state, payload) => {
      console.log(payload.payload)
      state.verif[payload.payload.type]= !state.verif[payload.payload.type];
    },
  },
});

// Action creators are generated for each case reducer function
export const { delFltr, activSelect, verifSelect } = managerFilterSlice.actions;

export default managerFilterSlice.reducer;
