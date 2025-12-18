import React, { useState } from "react";
import styled from "styled-components";

export default function StaticListRenderer() {
  const items = [
    { id: 1, name: "Jeeva" },
    { id: 2, name: "Saravana" },
    { id: 3, name: "Aswathy" },
    { id: 4, name: "Sinduja" },
  ];

  return (
    <Container>
      <Top></Top>
      <Bottom>
        <ol>
          {items?.map((item) => {
            return <li>{item.name}</li>;
          })}
        </ol>
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
  padding: 1rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
