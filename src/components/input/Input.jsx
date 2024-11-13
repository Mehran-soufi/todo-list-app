import React from "react";

function Input({ setTodoList, setText, text }) {
  const addToList = () => {
    if (text.trim()) {
      setTodoList((prevList) => [...prevList, { object: text, status: false }]);
    }
    setText("");
  };
  return (
    <div className="w-full h-full flex gap-1 justify-center items-center my-8 md:text-lg">
      <input
        type="text"
        className="w-4/5 py-3 px-4 bg-slate-800 border-none outline-none text-white rounded-md transition duration-75 focus:shadow-lg focus:shadow-slate-700 focus:bg-transparent"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        onClick={addToList}
        className="w-1/5 py-3 px-4 border-none outline-none text-white rounded-md bg-rose-600 transition duration-75 hover:bg-violet-600 hover:shadow-md hover:shadow-rose-600"
      >
        add
      </button>
    </div>
  );
}

export default Input;
