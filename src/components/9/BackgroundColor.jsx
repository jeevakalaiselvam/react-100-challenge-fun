import React, { useState } from "react";
import styled from "styled-components";

export default function BackgroundColor() {
  const [color, setColor] = useState("#FEFEFE");

  let colors = [
    { id: 1, color: "red" },
    { id: 2, color: "blue" },
    { id: 3, color: "green" },
    { id: 4, color: "yellow" },
  ];

  return (
    <Container>
      <Top>
        {colors?.map((colorInner) => {
          return (
            <div
              style={{
                width: "40px",
                height: "40px",
                margin: ".25rem",
                background: colorInner.color,
                cursor: "pointer",
              }}
              onClick={() => {
                setColor(colorInner.color);
              }}
            ></div>
          );
        })}
      </Top>
      <Bottom>
        <div
          style={{ width: "400px", height: "400px", background: color }}
        ></div>
      </Bottom>
    </Container>
  );
}

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
