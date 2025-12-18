import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function ImmutableListUpdate() {
  const [list, setList] = useState(["Jeeva"]);
  const [text, setText] = useState("");

  useEffect(() => {}, []);

  return (
    <Container>
      <Top>
        <ul>
          {list?.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </Top>
      <Bottom>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <button
          onClick={() => {
            if (text?.length != 0) {
              setList((old) => [...old, text]);
              setText("");
            }
          }}
        >
          Add to List
        </button>
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
