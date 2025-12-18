import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete, MdModeEdit } from "react-icons/md";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function BasicTodoEdit() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [idsUnderEdit, setIdsUnderEdit] = useState([]);
  const [idsEditMap, setIdsEditMap] = useState([]);

  useEffect(() => {}, []);

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

              {!idsUnderEdit?.includes(todo.id) && (
                <label
                  style={{
                    textDecoration: todo.isCompleted ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </label>
              )}
              {idsUnderEdit?.includes(todo.id) && (
                <input
                  type="text"
                  value={idsEditMap[todo.id] ?? ""}
                  onChange={(e) => {
                    let newValue = e.target.value;
                    setIdsEditMap((old) => ({ ...old, [todo.id]: newValue }));
                  }}
                  style={{ marginRight: "1rem" }}
                />
              )}
              {!idsUnderEdit?.includes(todo.id) && (
                <span
                  style={{
                    fontSize: "1rem",
                    color: "black",
                    display: "flex",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIdsEditMap((old) => ({ ...old, [todo.id]: todo.title }));
                    setIdsUnderEdit((old) => [...old, todo.id]);
                  }}
                >
                  <MdModeEdit />
                </span>
              )}
              {idsUnderEdit?.includes(todo.id) && (
                <span
                  style={{
                    fontSize: "1rem",
                    color: "black",
                    display: "flex",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    let newTodos = [
                      ...todos.map((oldTodo) => {
                        if (oldTodo.id == todo.id) {
                          return { ...oldTodo, title: idsEditMap[todo.id] };
                        } else {
                          return { ...oldTodo };
                        }
                      }),
                    ];
                    setTodos(newTodos);

                    setIdsUnderEdit((old) => [
                      ...old?.filter((id) => id != todo.id),
                    ]);
                  }}
                >
                  <FaCheck />
                </span>
              )}
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
