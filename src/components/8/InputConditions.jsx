import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function InputConditions() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (username?.length > 0 && password?.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [username, password]);

  return (
    <Container>
      <form>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={disable}>
          Submit
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
