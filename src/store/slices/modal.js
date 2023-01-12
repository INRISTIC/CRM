import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalCreate: false,
  modalWatch: false,
  modalBurger: false
}

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    modalCreateSelect: (state) => {
      state.modalCreate = true;
      state.modalWatch = false;
      state.modalBurger = false;
    },
    modalWatchSelect: (state) => {
      state.modalCreate = false;
      state.modalWatch = true;
      state.modalBurger = false;
    },
    modalBurgerSelect: (state) => {
      state.modalCreate = false;
      state.modalWatch = false;
      state.modalBurger = true;
    },
    closeModal: (state) => {
      state.modalCreate = false;
      state.modalWatch = false;
      state.modalBurger = false;
    }
  },
})

export const { modalCreateSelect, modalWatchSelect, modalBurgerSelect, closeModal } = modalSlice.actions

export default modalSlice.reducer