import React from "react";
import TodoFooter from "./TodoFooter";
import TodoItem from "./TodoItem";

import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo);
  // const dispatch = useDispatch();
  return (
    <div className="overflow-hidden bg-white rounded-md shadow-md">
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <TodoFooter />
    </div>
  );
};

export default TodoList;
