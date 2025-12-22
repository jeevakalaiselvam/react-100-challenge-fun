import { List } from "react-window";
import styled from "styled-components";

function RowComponent({ index, names, style }) {
  return (
    <span style={style}>
      {names[index]}
      <span>{` of ${names.length}`}</span>
    </span>
  );
}

export default function ReactWindow({ names }) {
  return (
    <Container>
      <List
        rowComponent={RowComponent}
        rowCount={names.length}
        rowHeight={25}
        rowProps={{ names }}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-height: 500px;
  overflow: scroll;
  background-color: #efefef;
`;
