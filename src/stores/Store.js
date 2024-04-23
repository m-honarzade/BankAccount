import customerReducer from "../features/customers/CustomerSlice";
import accountReducer from "../features/accounts/AccountSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    account: accountReducer,
  },
});

export default store;
