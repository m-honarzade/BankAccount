import { createStore, combineReducers, applyMiddleware } from "redux";
import customerReducer from "../features/customers/CustomerSlice";
import accountReducer from "../features/accounts/AccountSlice";
import { useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
