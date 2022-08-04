import React from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlide";

const TodoItem = ({ todo: item }) => {
  const dispatch = useDispatch();

  const toggleCompletionHandler = () => {
    dispatch(todoActions.clearCompleted(item.id));
  };

  const removeTodoHandler = () => {
    dispatch(todoActions.removeTodo(item.id));
  };

  const checkIcon = (
    <i
      onClick={toggleCompletionHandler}
      className="ml-3 text-3xl fa-solid fa-circle-check text-sky-500 hover:cursor-pointer"
    ></i>
  );

  return (
    <li className="flex items-center gap-4 p-5 border-b-2 border-b-gray-200 ">
      {item.completed && checkIcon}
      {!item.completed && (
        <i
          onClick={toggleCompletionHandler}
          className="ml-3 text-3xl text-gray-200 fa-regular fa-circle hover:text-sky-300 hover:cursor-pointer "
        ></i>
      )}

      <span
        onClick={() => {
          dispatch(todoActions.deActivate(item.id));
        }}
        className={`flex-1 ml-3 text-xl tracking-wide hover:cursor-pointer decoration-slice  ${
          item.isActive ? "text-gray-700 " : "text-gray-4 00 line-through"
        }`}
      >
        {item.text}
      </span>

      <i
        onClick={removeTodoHandler}
        className="text-4xl text-gray-400  hover:cursor-pointer fa-solid fa-xmark hover:block"
      ></i>
    </li>
  );
};

export default TodoItem;
