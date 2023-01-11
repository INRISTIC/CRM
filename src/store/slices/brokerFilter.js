import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: "",
  timeMinInterval: "",
  timeMaxInterval: "",
  costMinInterval: "",
  costMaxInterval: "",
  developer: "",
  typeRoom: "",
  finishing: false
};

export const brokerFilterSlice = createSlice({
  name: "brokerFilter",
  initialState,
  reducers: {
    changeHeaderBroker: (state, payload) => {
      state[payload.payload.type] = payload.payload.value;
    },
    checkboxHeaderBroker: (state) => {
      state.finishing = !state.finishing;
    },
    clearingHeaderBroker: () => initialState,
  },
});

export const { changeHeaderBroker, checkboxHeaderBroker, clearingHeaderBroker } = brokerFilterSlice.actions;

export default brokerFilterSlice.reducer;