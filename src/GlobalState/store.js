import React from "react";
import reducer from "./reducer";

const initialState = {
  count: 0,
};

const store = React.createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
