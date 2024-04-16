import { createStore, combineReducers } from "redux";
import customerReducer from "../features/customers/CustomerSlice";
import accountReducer from "../features/accounts/AccountSlice";
import { useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});
const store = createStore(rootReducer);
export default store;
