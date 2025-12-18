import React, { useState } from "react";
import styled from "styled-components";

export default function ControlledInput() {
  const [data, setData] = useState("");
  return (
    <Container>
      <input
        style={{
          padding: "1rem",
          outline: "none",
          border: "none",
          background: "#f0f0f0",
        }}
        type="text"
        placeholder="Enter some text..."
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <div style={{ padding: "1rem" }}>{data}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
