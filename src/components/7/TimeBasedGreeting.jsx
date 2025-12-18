import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function TimeBasedGreeting() {
  const [time, setTime] = useState(0);
  let now = new Date(time);
  let hour = now.getHours();
  let amPm = now.getHours() > 12 ? "PM" : "AM";

  let toGreet = "";

  if (amPm == "AM" && hour < 12) {
    toGreet = "Good Morning !";
  } else if (hour >= 12 && hour <= 17) {
    toGreet = "Good Afternoon !";
  } else if (hour > 17 && hour <= 21) {
    toGreet = "Good Evening !";
  } else {
    toGreet = "Good Night !";
  }

  useEffect(() => {
    let timer = setInterval(() => {
      let now = new Date();
      setTime(now.getTime());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <div>{toGreet}</div>
      <div>{new Date(time).toLocaleString()}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #333;
`;
