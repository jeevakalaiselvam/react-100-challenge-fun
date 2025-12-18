import React, { useState } from "react";
import styled from "styled-components";

export default function BooleanSwitch() {
  const [on, setOn] = useState(false);
  return (
    <Container>
      <Outer
        on={on}
        onClick={() => {
          setOn((old) => !old);
        }}
      >
        <Inner on={on}></Inner>
      </Outer>
      <Text on={on}>This is some sample text !</Text>
    </Container>
  );
}

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.on ? "#F29F05" : "gray")};
  padding: 1rem;
`;

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 104px;
  height: 54px;
  background-color: black;
  position: relative;
  padding: 0.25rem;
  cursor: pointer;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${(props) => (props.on ? "52px" : "2px")};
  top: 2px;
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.on ? "#F29F05" : "gray")};
  transition: all 0.25s ease;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
