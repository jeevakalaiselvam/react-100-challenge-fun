import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import SimpleJSX from "./components/1/SimpleJSX";
import CounterUsingState from "./components/2/CounterUsingState";
import BooleanSwitch from "./components/3/BooleanSwitch";
import ControlledInput from "./components/4/ControlledInput";
import ClickTrackingSimple from "./components/5/ClickTrackingSimple";
import SimpleCalculator from "./components/6/SimpleCalculator";
import TimeBasedGreeting from "./components/7/TimeBasedGreeting";
import InputConditions from "./components/8/InputConditions";
import BackgroundColor from "./components/9/BackgroundColor";
import StaticListRenderer from "./components/10/StaticListRenderer";

export default function App() {
  const items = [
    { id: 1, title: "Simple JSX", component: <SimpleJSX /> },
    { id: 2, title: "Counter App", component: <CounterUsingState /> },
    { id: 3, title: "Boolean Switch", component: <BooleanSwitch /> },
    { id: 4, title: "Controlled Input", component: <ControlledInput /> },
    { id: 5, title: "Click Tracking", component: <ClickTrackingSimple /> },
    { id: 6, title: "Simple Calculator", component: <SimpleCalculator /> },
    { id: 7, title: "Time Based Greeting", component: <TimeBasedGreeting /> },
    { id: 8, title: "Input Conditions", component: <InputConditions /> },
    { id: 9, title: "Background Color", component: <BackgroundColor /> },
    {
      id: 10,
      title: "Static List Renderer",
      component: <StaticListRenderer />,
    },
  ];

  const [selectedId, setSelectedId] = useState(1);

  const selectedItem = items?.find((item) => item.id == selectedId);

  useEffect(() => {
    setSelectedId(items?.length);
  }, []);

  return (
    <Container>
      <Sidebar>
        {items?.map((item) => {
          return (
            <TabItem
              key={item?.id}
              active={selectedId == item?.id}
              onClick={() => setSelectedId(item?.id)}
            >
              {item.title}
            </TabItem>
          );
        })}
      </Sidebar>
      <Content>{selectedItem.component}</Content>
    </Container>
  );
}

const TabItem = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: ${(props) => (props.active ? "#ffffff" : "#f0eff2")};
  padding: 0.5rem 0.25rem;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 0.25rem;
  font-size: 0.8rem;

  &:hover {
    background-color: #fefefe;
  }
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
`;

const Sidebar = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  width: 250px;
  background-color: #f0eff2;
  padding: 0.25rem;
  flex-direction: column;
`;

const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  min-height: 100vh;
  background-color: #f9f9f9;
  flex-direction: column;
  padding: 1rem;
`;
