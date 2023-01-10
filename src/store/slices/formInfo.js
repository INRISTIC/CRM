import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basic: true,
  forBroker: false,
  tables: [
    {
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
      let indexRow = state.tables[payload.payload.idTable].info.findIndex(element => element.id === payload.payload.id);
      state.tables[payload.payload.idTable].info[indexRow].content[payload.payload.elem] = payload.payload.value;
    },
    addRow: (state, payload) => {
      state.tables[payload.payload.idTable].info = [...state.tables[payload.payload.idTable].info, payload.payload.row]
    },
    deleteRow: (state, payload) => {
      let indexRow = state.tables[payload.payload.idTable].info.findIndex(element => element.id === payload.payload.id);
      state.tables[payload.payload.idTable].info = [...state.tables[payload.payload.idTable].info.slice(0, indexRow), ...state.tables[payload.payload.idTable].info.slice(indexRow + 1) ]
    }
  },
});

export const { tdChange, addRow, deleteRow } = formInfoSlice.actions;

export default formInfoSlice.reducer;
