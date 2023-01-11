import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basic: {
    activSelect: '',
    mark: {
      content: 'Выберете из списка',
      select: ['Текст 1', 'Текст 2', 'Текст 3', 'Текст 4',],
    },
    status: {
      content: 'Выберете из списка',
      select: ['Текст 1', 'Текст 2'],
    },
    activ: false,
    verif: false,
    nameOffer: "",
    nameBuilder: "",
    numberShortPhone: "",
    numberPhone: "",
    graficWorkDay: "",
    graficWeekend: "",
    city: "",
    location: "",
    coordinateX: "",
    coordinateY: "",
    income: "",
    employeeIncome: "",
    limit: ""
  },
  forBroker: {
    appartament: false,
    description: "",
    script: "",
    rules: ""
  },
  tables: [
    {
      id: 0,
      date: undefined,
      info: [
        {
          id: 1 * 10,
          content: ["", "", "", ""],
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
    basicChange: (state, payload) => {
      state.basic[payload.payload.inpt] = payload.payload.value;
    },
    basicCheckbox: (state, payload) => {
      state.basic[payload.payload.type] = payload.payload.status;
    },
    basicSelectorChange: (state, payload) => {
      if (state.basic.activSelect === payload.payload.type) {
        state.basic.activSelect = "";
      } else {
        state.basic.activSelect = payload.payload.type;
      }
    },
    basicSelectorContent: (state, payload) => {
      state.basic[payload.payload.type].content = payload.payload.content;
      state.basic.activSelect = "";
    },
    forBrokerChange: (state, payload) => {
      state.forBroker[payload.payload.inpt] = payload.payload.value;
    },
    forBrokerCheckbox: (state, payload) => {
      state.forBroker[payload.payload.type] = payload.payload.status;
    },
    tableChange: (state, payload) => {
      let indexTable = state.tables.findIndex(
        (element) => element.id === payload.payload.idTable
      );
      state.tables[indexTable].date = payload.payload.value;
    },
    tdChange: (state, payload) => {
      let indexTable = state.tables.findIndex(
        (element) => element.id === payload.payload.idTable
      );
      let indexRow = state.tables[indexTable].info.findIndex(
        (element) => element.id === payload.payload.id
      );
      state.tables[indexTable].info[indexRow].content[
        payload.payload.elem
      ] = payload.payload.value;
    },
    addTable: (state, payload) => {
      state.tables = [...state.tables, payload.payload.table]
    },
    deleteTable: (state, payload) => {
      let indexTable = state.tables.findIndex(
        (element) => element.id === payload.payload.idTable
      );
      state.tables = [
        ...state.tables.slice(0, indexTable),
        ...state.tables.slice(indexTable + 1),
      ];
    },
    addRow: (state, payload) => {
      let indexTable = state.tables.findIndex(
        (element) => element.id === payload.payload.idTable
      );
      state.tables[indexTable].info = [
        ...state.tables[indexTable].info,
        payload.payload.row,
      ];
    },
    deleteRow: (state, payload) => {
      let indexTable = state.tables.findIndex(
        (element) => element.id === payload.payload.idTable
      );
      let indexRow = state.tables[indexTable].info.findIndex(
        (element) => element.id === payload.payload.id
      );
      state.tables[indexTable].info = [
        ...state.tables[indexTable].info.slice(0, indexRow),
        ...state.tables[indexTable].info.slice(indexRow + 1),
      ];
    },

    

  },
});

export const { addTable, deleteTable, tableChange, tdChange, addRow, deleteRow, basicChange, basicCheckbox, basicSelectorChange, basicSelectorContent, forBrokerChange, forBrokerCheckbox } = formInfoSlice.actions;

export default formInfoSlice.reducer;
