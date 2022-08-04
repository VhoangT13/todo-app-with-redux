import React from "react";

import { useSelector } from "react-redux";

const TodoFooter = () => {
  const count = useSelector((state) => state.todo).length;

  return (
    <div className="flex justify-between p-5 bg-white">
      <p className="tracking-wide text-gray-400"> {count} Items left</p>
      <div className="flex gap-4 text-lg text-gray-400">
        <button className="text-blue-700">All</button>
        <button className="hover:text-gray-700">Active</button>
        <button className="hover:text-gray-700">Completed</button>
      </div>
    </div>
  );
};

export default TodoFooter;
