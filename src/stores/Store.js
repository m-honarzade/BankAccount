import { createStore } from "redux";

const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountReducer = (state = accountInitialState, action) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};

const store = createStore(accountReducer);

const deposit = (amount) => {
  return { type: "account/deposit", payload: amount };
};
const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};
const requestLoan = (amount, purpose) => {
  return { type: "account/requestLoan", payload: { amount, purpose } };
};
const payLoan = () => {
  return {
    type: "account/payLoan",
  };
};

store.dispatch(deposit(800));
store.dispatch(withdraw(500));
store.dispatch(requestLoan(300, "buy a car"));
console.log(store.getState());
