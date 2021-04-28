import React from "react";
import { store } from "../../GlobalState/store";

export default function Display() {
  const { state } = React.useContext(store);
  return (
    <div>
      <h1>Count : {state.count} </h1>
    </div>
  );
}
