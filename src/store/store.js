import { configureStore } from '@reduxjs/toolkit'

import modal from './slices/modal'
import managerReducer from "./slices/managerSelect"
import sortReducer from './slices/sortBroker'

export const store = configureStore({
  reducer: {
    managerSelect: managerReducer,
    sortBroker: sortReducer,
    modal: modal
  },
})