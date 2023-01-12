import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  broker: true,
  manager: false,
  users: false,
};

export const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    changeMenuBroker: (state) => {
      return {
        broker: true,
        manager: false,
        users: false,
      };
    },
    changeMenuManager: (state) => {
      return {
        broker: false,
        manager: true,
        users: false,
      };
    },
    changeMenuUsers: (state) => {
      return {
        broker: false,
        manager: false,
        users: true,
      };
    },
  },
});

export const { changeMenuBroker, changeMenuManager, changeMenuUsers } = menuSlice.actions;

export default menuSlice.reducer;
