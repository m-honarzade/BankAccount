import { createStore, combineReducers } from "redux";
import customerReducer from "../features/customers/CustomerSlice";
import accountReducer from "../features/accounts/AccountSlice";

const rootReducer = combineReducers({
  custmer: customerReducer,
  account: accountReducer,
});
const store = createStore(rootReducer);
export default store;
