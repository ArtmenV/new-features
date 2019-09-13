import React, { useReducer } from "react";
import { counterReducer, initState } from "./reducer";

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initState);
  return (
    <>
      <h1>Count: {state.count}</h1>
      <hr />
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};
