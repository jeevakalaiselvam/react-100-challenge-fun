import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function TabNavigatinUsingState() {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Tab 1", content: "Content 1" },
    { id: 2, title: "Tab 2", content: "Content 2" },
    { id: 3, title: "Tab 3", content: "Content 3" },
    { id: 4, title: "Tab 4", content: "Content 4" },
    { id: 5, title: "Tab 5", content: "Content 5" },
  ]);
  const [selected, setSelected] = useState(1);

  useEffect(() => {}, []);

  return (
    <Container>
      <Top>
        {tabs?.map((tab) => {
          return (
            <TabInner
              onClick={() => {
                setSelected(tab?.id);
              }}
            >
              {tab?.title}
            </TabInner>
          );
        })}
      </Top>
      <Bottom>
        {
          tabs?.find((tab) => {
            return tab?.id == selected;
          })?.content
        }
      </Bottom>
    </Container>
  );
}

const TabInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4px;
  background-color: #e6e6e6;
  margin-bottom: 4px;
  cursor: pointer;

  &:hover {
    background-color: #fefefe;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  padding: 2px;
  min-height: 50vh;
  background-color: #d7d7d7;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex: 1;
  min-height: 50vh;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
