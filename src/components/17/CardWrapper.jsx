import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function CardWrapper() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {}, []);

  return (
    <Container>
      <Top>
        <input
          type="text"
          style={{ width: "400px", marginBottom: ".25rem" }}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="Enter Title..."
        />
        <textarea
          style={{ width: "400px", height: "200px" }}
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          placeholder="Enter Description..."
        />
        <button
          onClick={() => {
            createCard();
          }}
        >
          Create
        </button>
      </Top>
      <Bottom>
        <Card>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Card>
      </Bottom>
    </Container>
  );
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  width: 400px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem 0.25rem;
  font-size: 1rem;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem 0.25rem;
  font-size: 0.9rem;
  opacity: 0.75;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding: 1rem;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
