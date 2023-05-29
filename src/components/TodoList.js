import React from "react";
import TodoFooter from "./TodoFooter";
import TodoItem from "./TodoItem";

import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo);
  const filter = useSelector((state) => state.filter);
  // const dispatch = useDispatch();
  const filteredTodos = todoList.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "active") {
      return todo.isActive;
    } else {
      return true;
    }
  });

  return (
    <div className="overflow-hidden bg-white rounded-md shadow-md">
      <ul className="h-[500px] overflow-auto scrollbar">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <TodoFooter />
    </div>
  );
};

export default TodoList;
