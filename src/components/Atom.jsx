import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function Atom() {
  const [TMP, SETTMP] = useState(null);

  useEffect(() => {}, []);

  return (
    <Container>
      <Top></Top>
      <Bottom></Bottom>
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
