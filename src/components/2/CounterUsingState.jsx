import React, { useState } from "react";
import styled from "styled-components";

export default function CounterUsingState() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  return (
    <Container>
      <div>
        <button
          onClick={() => {
            setError("");
            setCount((old) => old + 1);
          }}
        >
          PLUS
        </button>
      </div>
      <div style={{ padding: "1rem" }}>{count}</div>
      <div>
        <button
          onClick={() => {
            if (count == 1) {
              setError("Count cannot be less than 0 !");
            } else {
              setCount((old) => old - 1);
            }
          }}
        >
          MINUS
        </button>
      </div>
      {error?.length > 0 && <div style={{ color: "red" }}>{error}</div>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
