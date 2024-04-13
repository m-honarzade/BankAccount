import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./stores/Store.js";
import { deposit } from "./features/accounts/AccountSlice.js";

store.dispatch(deposit(800));
console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
