import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="mx-auto  w-[800px] mt-10 p-4">
      <h2 className="text-5xl font-bold tracking-[.3em] text-white uppercase mb-10 ">
        Todo
      </h2>
      <Input />
      <TodoList />
    </div>
  );
}

export default App;
