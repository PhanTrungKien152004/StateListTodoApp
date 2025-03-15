import React from "react";
import { todoType } from "../App";
import Todo from "./Todo";

const TodoList = ({ todoList }: { todoList: todoType[] }) => {
  return (
    <div>
      {todoList.map((todoApp) => {
        return <Todo key={todoApp.id} name={todoApp.name} />;
      })}
    </div>
  );
};

export default TodoList;
