import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlide";

const Input = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    if (e.key === "Enter") {
      if (text.trim() === "") return;
      dispatch(
        todoActions.addTodo({
          id: Math.random() * 10,
          text: text,
          completed: false,
          isActive: true,
        })
      );
      setText("");
    }
  };

  return (
    <div className="flex p-5 mb-8 bg-white rounded-md shadow-md ">
      <i className="mx-3 text-3xl text-gray-200  fa-regular fa-circle"></i>
      <input
        type="text"
        className="flex-1 ml-3 text-xl tracking-wider focus:outline-none"
        placeholder="Input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={submitHandler}
      />
    </div>
  );
};

export default Input;
