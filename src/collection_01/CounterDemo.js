import React, { useState } from "react";

const CounterDemo = () => {
  // clicks on buttons should increment/decrement the value 0
  // possible to do using let on line 6?
  // yes but see https://stackoverflow.com/questions/58860021/why-react-hook-usestate-uses-const-and-not-let
  const [paraValue, SetParaValue] = useState(0);
  const increment = () => {
    SetParaValue(paraValue + 1);
  };
  const decrement = () => {
    SetParaValue(paraValue - 1);
  };
  return (
    <div>
      hello
      <p>{paraValue}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default CounterDemo;
