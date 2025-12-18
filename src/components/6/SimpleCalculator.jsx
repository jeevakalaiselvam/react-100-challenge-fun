import React, { useState } from "react";
import styled from "styled-components";

export default function SimpleCalculator() {
  const [result, setResult] = useState("0");

  const isNotSymbol = (char) => {
    if (char != "+" && char != "-" && char != "*" && char != "/") {
      return true;
    }
  };

  const includeNumberInLogic = (number) => {
    setResult((old) => String(old) + String(number));
  };

  const calculateResult = () => {
    let innerResult = eval(result);
    setResult(String(innerResult?.toFixed(2)));
  };

  return (
    <Container>
      <Outer>
        <Display>{result}</Display>
        <Buttons>
          <Left>
            <SmallButton
              onClick={() => {
                if (isNotSymbol(result?.[result?.length - 1])) {
                  setResult((old) => String(old) + "+");
                }
              }}
            >
              +
            </SmallButton>
            <SmallButton
              onClick={() => {
                if (isNotSymbol(result?.[result?.length - 1])) {
                  setResult((old) => String(old) + "-");
                }
              }}
            >
              -
            </SmallButton>
            <SmallButton
              onClick={() => {
                if (isNotSymbol(result?.[result?.length - 1])) {
                  setResult((old) => String(old) + "*");
                }
              }}
            >
              x
            </SmallButton>
            <SmallButton
              onClick={() => {
                includeNumberInLogic(7);
              }}
            >
              7
            </SmallButton>
            <SmallButton
              onClick={() => {
                includeNumberInLogic(8);
              }}
            >
              8
            </SmallButton>
            <SmallButton
              onClick={() => {
                includeNumberInLogic(9);
              }}
            >
              9
            </SmallButton>
            <SmallButton
              onClick={() => {
                includeNumberInLogic(4);
              }}
            >
              4
            </SmallButton>
            <SmallButton
              onClick={() => {
                includeNumberInLogic(5);
              }}
            >
              5
            </SmallButton>
            <SmallButton
              onClick={() => {
                includeNumberInLogic(6);
              }}
            >
              6
            </SmallButton>
            <SmallButton
              onClick={() => {
                includeNumberInLogic(1);
              }}
            >
              1
            </SmallButton>
            <SmallButton
              onClick={() => {
                includeNumberInLogic(2);
              }}
            >
              2
            </SmallButton>
            <SmallButton
              onClick={() => {
                includeNumberInLogic(3);
              }}
            >
              3
            </SmallButton>
          </Left>
          <Right>
            <SmallButton
              onClick={() => {
                if (isNotSymbol(result?.[result?.length - 1])) {
                  setResult((old) => String(old) + "/");
                }
              }}
            >
              /
            </SmallButton>
            <SmallButton onClick={() => setResult("")}>C</SmallButton>
            <LargeButton
              onClick={() => {
                calculateResult();
              }}
            >
              =
            </LargeButton>
          </Right>
        </Buttons>
      </Outer>
    </Container>
  );
}

const SmallButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: #fcfcfc;
  border: 2px solid #ededed;
  font-size: 2rem;

  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
`;

const LargeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 300px;
  background-color: #f88b6a;
  font-size: 2rem;

  &:hover {
    background-color: #e27858;
    cursor: pointer;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 3;
  height: 600px;
  flex-wrap: wrap;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 600px;
  background-color: yellow;
  flex-direction: column;
`;

const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 150px;
  background-color: #2f2f2f;
  color: #fefefe;
  padding: 0.5rem;
  font-size: 5rem;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  height: 600px;
`;

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  height: 750px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e0e0e0;
`;
