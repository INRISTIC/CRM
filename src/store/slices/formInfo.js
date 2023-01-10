import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basic: true,
  forBroker: false,
  tables: [
    {
      rows: 1,
      id: 0,
      date: undefined,
      info: [
        {
          id: 1 * 10,
          content: ["", "", "", ""]
        },
      ],
    },
  ],
  content: {},
};

export const formInfoSlice = createSlice({
  name: "formInfoSlice",
  initialState,
  reducers: {
    tdChange: (state, payload) => {
      let indexQ = state.tables[payload.payload.idTable].info.findIndex(element => element.id === payload.payload.id);
      state.tables[payload.payload.idTable].info[indexQ].content[payload.payload.elem] = payload.payload.value;
    }
  },
});

export const { tdChange } = formInfoSlice.actions;

export default formInfoSlice.reducer;
