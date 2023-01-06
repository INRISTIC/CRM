import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalCreate: false,
  modalWatch: false
}

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    modalCreateSelect: (state) => {
      state.modalCreate = true;
      state.modalWatch = false;
    },
    modalWatchSelect: (state) => {
      state.modalCreate = false;
      state.modalWatch = true;
    },
    closeModal: (state) => {
      state.modalCreate = false;
      state.modalWatch = false;
    }
  },
})

export const { modalCreateSelect, modalWatchSelect, closeModal } = modalSlice.actions

export default modalSlice.reducer