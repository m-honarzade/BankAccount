const customerInitialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// *********************Reducer

const customerReducer = (state = customerInitialState, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
};
export default customerReducer;

// ******************Action creators

const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
};
export { createCustomer };

const updateName = (fullName) => {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
};

export { updateName };

// store.dispatch(createCustomer("ali", 443251));
// store.dispatch(updateName("mohammad"));
// console.log(store.getState());
