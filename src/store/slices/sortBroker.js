import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: false,
  group: false,
  date: true
}

export const sortBrokerSlice = createSlice({
  name: 'managerSelect',
  initialState,
  reducers: {
    emailSelect: (state) => {
      state.email = true;
      state.group = false;
      state.date = false;
    },
    groupSelect: (state) => {
      state.email = false;
      state.group = true;
      state.date = false;
    },
    dateSelect: (state) => {
      state.email = false;
      state.group = false;
      state.date = true;
    }
  },
})

// Action creators are generated for each case reducer function
export const { emailSelect, groupSelect, dateSelect } = sortBrokerSlice.actions

export default sortBrokerSlice.reducer