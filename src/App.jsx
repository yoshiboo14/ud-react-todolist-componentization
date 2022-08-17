import React, { useState } from "react";
import "./styles.css";
// InputTodoコンポーネントのインポート
import { InputTodo } from "./components/InputTodo";
//
import { InCompleteTodo } from "./components/InCompleteTodo";
//
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickadd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickdelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* 　　　　コンポーネントの呼び出し */}
      <InputTodo
        // 必要なpropsを渡す
        // propsは、「props名=値」という形で、コンポーネントを呼び出す箇所で渡す。
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickadd}
      />
      <InCompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickdelete}
      />
      <CompleteTodo todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
