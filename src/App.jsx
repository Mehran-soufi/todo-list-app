import { useState } from "react";
import Input from "./components/input/Input";
import List from "./components/list/List";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="w-screen py-4 h-screen bg-gradient-to-tr from-slate-800 to-slate-950 flex flex-col justify-center items-center">
      <div className="lg:w-1/3 sm:w-1/2 w-full p-1 h-1/3 mx-auto flex flex-col justify-center items-center">
        <h1 className="title-font font-bold xl:text-7xl sm:text-5xl text-4xl text-slate-200">
          To Do List App
        </h1>
        <Input setTodoList={setTodoList} setText={setText} text={text} />
      </div>
      <div className="lg:w-1/3 sm:w-1/2 w-full p-1 h-2/3 mx-auto flex flex-col justify-center items-center">
        <List todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default App;
