import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function ResusableComponent() {
  const [cards, setCards] = useState([
    { id: uuidv4(), name: "Jeeva", role: "Senior Developer" },
    { id: uuidv4(), name: "Aswathy", role: "Junior Developer" },
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {}, []);

  const createCard = () => {
    setCards((old) => [...old, { id: uuidv4(), name: name, role: role }]);
  };

  return (
    <Container>
      <Top>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          placeholder="Enter Name..."
        />
        <input
          type="text"
          onChange={(e) => {
            setRole(e.target.value);
          }}
          value={role}
          placeholder="Enter Role..."
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
        {cards?.map(({ name, role }) => {
          return (
            <Card>
              <Name>{name}</Name>
              <Role>{role}</Role>
            </Card>
          );
        })}
      </Bottom>
    </Container>
  );
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0.25rem;
`;

const Role = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0.25rem;
`;

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
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
