import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import {
  generateDarkTextColorForLightBg,
  generateLightTextColorForLightBg,
} from "../../helpers/colorHelper";

function Button({ color, title, textColor }) {
  useEffect(() => {}, []);

  return (
    <ButtonContainer color={color} textColor={textColor}>
      {title}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${(props) =>
      generateLightTextColorForLightBg(props.color, 10)};
  }
`;

export default function ResuableButton() {
  useEffect(() => {}, []);

  return (
    <Container>
      <Top></Top>
      <Bottom>
        <Button color={"#1B7F79"} textColor={"#FEFEFE"} title={"Button 1"} />
        <Button color={"#FF4858"} textColor={"#FEFEFE"} title={"Button 2"} />
        <Button color={"#44803F"} textColor={"#FEFEFE"} title={"Button 3"} />
        <Button color={"#90A19D"} textColor={"#FEFEFE"} title={"Button 4"} />
        <Button color={"#027368"} textColor={"#FEFEFE"} title={"Button 5"} />
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
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
