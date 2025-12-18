import React, { useState } from "react";
import styled from "styled-components";

export default function ClickTrackingSimple() {
  const [clicks, setClicks] = useState(0);
  return (
    <Container>
      <div style={{ padding: "1rem" }}>{clicks}</div>
      <div>
        <button
          style={{
            background: "#A6432D",
            border: "none",
            outline: "none",
            margin: "1rem",
            padding: "1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setClicks((old) => old + 1);
          }}
        >
          CLICK ME
        </button>
        <button
          style={{
            background: "#D9A74A",
            border: "none",
            outline: "none",
            margin: "1rem",
            padding: "1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setClicks((old) => old + 1);
          }}
        >
          CLICK ME
        </button>
        <button
          style={{
            background: "#F2CF63",
            border: "none",
            outline: "none",
            margin: "1rem",
            padding: "1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setClicks((old) => old + 1);
          }}
        >
          CLICK ME
        </button>
        <button
          style={{
            background: "#4162A6",
            border: "none",
            outline: "none",
            margin: "1rem",
            padding: "1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setClicks((old) => old + 1);
          }}
        >
          CLICK ME
        </button>
        <button
          style={{
            background: "#733462",
            border: "none",
            outline: "none",
            margin: "1rem",
            padding: "1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setClicks((old) => old + 1);
          }}
        >
          CLICK ME
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
