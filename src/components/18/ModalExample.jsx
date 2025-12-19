import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

function ModalSimple({ title, description, onClose, closeMessage }) {
  return (
    <ModalContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Close>
        <CloseButton
          onClick={() => {
            onClose();
          }}
        >
          {closeMessage}
        </CloseButton>
      </Close>
    </ModalContainer>
  );
}

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 4px;
  color: #333;

  &:hover {
    background-color: #0099dd;
    border: 1px solid #0099dd;
    border-radius: 4px;
    color: #fefefe;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 1rem;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 0.8rem;
  opacity: 0.75;
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  flex-direction: column;
  border: 1px solid #333;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transform: translate(-25%, -400%);
  padding: 1rem;
  z-index: 9999999;
`;

export default function ModalExample() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, []);

  return (
    <Container id="custom-portal-modal">
      <Top>
        {!showModal && (
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Show Modal
          </button>
        )}
        {showModal && (
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            Hide Modal
          </button>
        )}
      </Top>
      <Bottom></Bottom>
      {showModal &&
        createPortal(
          <ModalSimple
            title={"Confirm Delete"}
            description={"This operation cannot be done"}
            closeMessage={"Confirm"}
            onClose={() => {
              setShowModal(false);
            }}
          />,
          document.getElementById("custom-portal-modal")
        )}
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
