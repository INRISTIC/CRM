import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: true,
  application: false
}

export const managerSelectSlice = createSlice({
  name: 'managerSelect',
  initialState,
  reducers: {
    userSelect: (state) => {
      state.users = true;
      state.application = false;
    },
    applicationSelect: (state) => {
      state.application = true;
      state.users = false;
    } 
  },
})

// Action creators are generated for each case reducer function
export const { userSelect, applicationSelect } = managerSelectSlice.actions

export default managerSelectSlice.reducer