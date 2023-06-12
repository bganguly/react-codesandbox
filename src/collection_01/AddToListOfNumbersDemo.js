// demos adding a new dom element to an existing list of dom nodes
import React, { useState } from "react";

// takes an int prop and prints paras incl and upto that int
const AddToListOfNumbersDemo = ({ number }) => {
  const [arrayOfNumbers, SetArrayOfNumbers] = useState([
    ...Array(number).keys()
  ]);

  const incrementNumbers = () => {
    SetArrayOfNumbers([
      ...arrayOfNumbers,
      arrayOfNumbers[arrayOfNumbers.length - 1] + 1
    ]);
  };

  return (
    <div>
      {arrayOfNumbers.map((el, index) => (
        <p key={index}>{el}</p>
      ))}
      <button onClick={incrementNumbers}>Increment Numbers</button>
    </div>
  );
};

export default AddToListOfNumbersDemo;
