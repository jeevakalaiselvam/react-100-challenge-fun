import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function BasicTodo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {}, []);

  console.log(todos);

  return (
    <Container>
      <Top>
        {todos?.map((todo) => {
          return (
            <Todo>
              <input
                type="checkbox"
                checked={todo?.isCompleted}
                onChange={(e) => {
                  let isChecked = e.target.checked;
                  console.log({ todo, isChecked });
                  setTodos((old) => [
                    ...old?.map((innerTodo) => {
                      if (innerTodo.id == todo.id) {
                        return {
                          ...innerTodo,
                          isCompleted: Boolean(isChecked),
                        };
                      } else {
                        return { ...innerTodo };
                      }
                    }),
                  ]);
                }}
                style={{ marginRight: "1rem" }}
              />
              <label
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.title}
              </label>
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
