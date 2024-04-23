const accountInitialState = {
  balance: 20,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

// *********************Reducer

const accountReducer = (state = accountInitialState, action) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/convertingCurrency":
      return { ...state, isLoading: true };
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

export default accountReducer;

// ****************Action Creators

export const deposit = (amount, currency) => {
  if (currency === "USD") return { type: "account/deposit", payload: amount };
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    console.log(data);
    const converted = data.rates.USD;
    dispatch({ type: "account/deposit", payload: converted });
  };
};
// export { deposit };

export const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};
// export { withdraw };

export const requestLoan = (amount, purpose) => {
  return { type: "account/requestLoan", payload: { amount, purpose } };
};
// export { requestLoan };

export const payLoan = () => {
  return {
    type: "account/payLoan",
  };
};
// export { payLoan };

// store.dispatch(deposit(800));
// store.dispatch(withdraw(500));
// store.dispatch(requestLoan(300, "buy a car"));
// console.log(store.getState());
