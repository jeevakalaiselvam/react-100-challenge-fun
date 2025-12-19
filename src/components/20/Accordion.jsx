import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function Accordion() {
  const [accordions, setAccordions] = useState([
    { id: 1, title: "Accordion 1", decription: "Accordion 1 Description" },
    { id: 2, title: "Accordion 2", decription: "Accordion 2 Description" },
  ]);
  const [activeAccordions, setActiveAccordions] = useState([]);

  useEffect(() => {}, []);

  return (
    <Container>
      <Top></Top>
      <Bottom>
        {accordions?.map((acc) => {
          return (
            <AccordionContainer>
              <AccTitle
                onClick={() => {
                  if (activeAccordions?.includes(acc?.id)) {
                    setActiveAccordions((old) => [
                      ...old?.filter((id) => id != acc?.id),
                    ]);
                  } else {
                    setActiveAccordions((old) => [...old, acc?.id]);
                  }
                }}
              >
                <AccIcon>
                  {!activeAccordions?.includes(acc?.id) && (
                    <MdKeyboardArrowRight />
                  )}
                  {activeAccordions?.includes(acc?.id) && (
                    <MdKeyboardArrowDown />
                  )}
                </AccIcon>
                {acc?.title}
              </AccTitle>
              {activeAccordions?.includes(acc?.id) && (
                <AccDecription
                  onClick={() => {
                    if (activeAccordions?.includes(acc?.id)) {
                      setActiveAccordions((old) => [
                        ...old?.filter((id) => id != acc?.id),
                      ]);
                    } else {
                      setActiveAccordions((old) => [...old, acc?.id]);
                    }
                  }}
                >
                  {acc?.decription}
                </AccDecription>
              )}
            </AccordionContainer>
          );
        })}
      </Bottom>
    </Container>
  );
}

const AccIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(3px);
`;

const AccTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  width: 100%;
  position: relative;
  font-size: 1rem;
`;

const AccDecription = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  opacity: 0.5;
  transition: all 0.5s ease;
  padding-left: 1rem;
  font-size: 0.9rem;
`;

const AccordionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  padding: 4px;
  border: 1px solid #dcdcdc;
  flex-direction: column;
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
