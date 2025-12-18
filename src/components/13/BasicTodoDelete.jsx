import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function BasicTodoDelete() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {}, []);

  return (
    <Container>
      <Top>
        {todos?.map((todo) => {
          return (
            <Todo>
              <input
                type="checkbox"
                value={todo?.isCompleted}
                style={{ marginRight: "1rem" }}
              />
              <label style={{ minWidth: "200px" }}>{todo.title}</label>
              <span
                style={{
                  fontSize: "1rem",
                  color: "black",
                  display: "flex",
                  cursor: "pointer",
                }}
                onClick={() => {
                  let newTodos = [
                    ...todos?.filter((innerTodo) => {
                      return innerTodo?.id != todo?.id;
                    }),
                  ];
                  setTodos(newTodos);
                }}
              >
                <MdDelete />
              </span>
            </Todo>
          );
        })}
      </Top>
      <Bottom>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let todoToCreate = {
              title: title,
              isCompleted: false,
              id: uuidv4(),
            };
            setTitle("");
            setTodos((old) => [...old, todoToCreate]);
          }}
        >
          SAVE
        </button>
      </Bottom>
    </Container>
  );
}

const Todo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 500px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  flex-direction: column;
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
