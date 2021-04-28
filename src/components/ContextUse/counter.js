import React, { Component } from "react";
import { store } from "../../GlobalState/store";
import { increment, decrement } from "../../GlobalState/action";
import Display from "./display";

export default class Counter extends Component {
  static contextType = store;
  render() {
    const { dispatch } = this.context;
    return (
      <div>
        <Display />
        <button onClick={() => dispatch(increment)}>INCREMENT</button>
        <button onClick={() => dispatch(decrement)}>DECREMENT</button>
      </div>
    );
  }
}
