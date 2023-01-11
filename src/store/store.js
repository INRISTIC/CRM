import { configureStore } from "@reduxjs/toolkit";

import modal from "./slices/modal";
import managerReducer from "./slices/managerSelect";
import sortReducer from "./slices/sortBroker";
import formInfo from "./slices/formInfo";
import managerFilter from "./slices/managerFilter";
import brokerFilter from "./slices/brokerFilter";


export const store = configureStore({
  reducer: {
    managerSelect: managerReducer,
    sortBroker: sortReducer,
    modal: modal,
    formInfo: formInfo,
    managerFilter: managerFilter,
    brokerFilter: brokerFilter,
  },
});
