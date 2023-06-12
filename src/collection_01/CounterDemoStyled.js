import React, { useState } from "react";
import styled from "styled-components";

const CounterDemoStyled = () => {
  const [paraValue, SetParaValue] = useState(0);
  const [clickCount, SetClickCount] = useState(0);

  const increment = () => {
    SetParaValue(paraValue + 1);
    SetClickCount(clickCount + 1);
  };
  const decrement = () => {
    SetParaValue(paraValue - 1);
    SetClickCount(clickCount + 1);
  };

  return (
    <div id="main">
      hello
      <StyledDiv>
        <button onClick={increment}>increment</button>
        <p>{paraValue}</p>
        <button onClick={decrement}>decrement</button>
        <StyledPara>clickCount: {clickCount}</StyledPara>
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 30px 25%;
`;
const StyledPara = styled.p`
  flex: 0 0 100%;
  margin: 30px;
`;

export default CounterDemoStyled;
