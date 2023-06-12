// demos clicks on a collection of components
//, with each component having an embedded clickable element
import React, { useState } from "react";

export const ClickablePara = ({ content, clickHandler }) => {
  return <p onClick={clickHandler}>{content}</p>;
};

// takes an int prop and prints paras incl and upto that int
const ClickableListOfNumbersDemo02 = ({ number }) => {
  const [arrayOfNumbers, SetArrayOfNumbers] = useState([
    ...Array(number).keys()
  ]);

  // const decrement = (e) => {
  //   arrayOfNumbers[e.target.innerHTML] = --e.target.innerHTML;
  //   SetArrayOfNumbers(arrayOfNumbers);
  // };
  const decrement = (index) => {
    const workingArray = [...arrayOfNumbers];
    --workingArray[index];
    SetArrayOfNumbers(workingArray);
  };

  return (
    <div>
      Click on any number below to decrease their value
      {arrayOfNumbers.map((el, index) => (
        <ClickablePara
          key={index}
          content={el}
          clickHandler={() => decrement(index)}
        />
      ))}
    </div>
  );
};

export default ClickableListOfNumbersDemo02;
