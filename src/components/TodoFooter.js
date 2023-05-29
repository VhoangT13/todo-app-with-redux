import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../store/filterSlice";

const TodoFooter = () => {
  const count = useSelector((state) => state.todo).length;
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between p-5 bg-white">
      <p className="tracking-wide text-gray-400"> {count} Items left</p>
      <div className="flex gap-4 text-lg text-gray-400">
        <button
          onClick={() => {
            dispatch(setFilter("all"));
          }}
          className={`${filter === "all" ? "text-blue-700" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => {
            dispatch(setFilter("active"));
          }}
          className={`${filter === "active" ? "text-blue-700" : ""}`}
        >
          Active
        </button>
        <button
          onClick={() => {
            dispatch(setFilter("completed"));
          }}
          className={`${filter === "completed" ? "text-blue-700" : ""}`}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFooter;
