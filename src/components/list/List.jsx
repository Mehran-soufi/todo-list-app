import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdRemoveDone, MdDoneAll } from "react-icons/md";

function List({ todoList, setTodoList }) {
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {}, [todoList]);

  const removeTask = (index) => {
    setTodoList((prevList) => {
      const help = [...prevList];
      help.splice(index, 1);
      return [...help];
    });
  };

  const changeTask = (index) => {
    setTodoList((prevList) => {
      const help = [...prevList];
      help[index] = { ...help[index], status: !help[index].status };
      return [...help];
    });
  };

  const changeItemHandler = (index) => {
    setEditIndex(index);
  };

  const handleInputChange = (e, index) => {
    const newValue = e.target.value;
    setTodoList((prevList) => {
      const help = [...prevList];
      help[index].object = newValue;
      return [...help];
    });
  };

  return (
    <div className="w-full h-full flex justify-center items-center overflow-y-auto rounded-md shadow-md shadow-slate-700">
      {todoList.length ? (
        <div className="w-full h-full flex flex-col justify-start items-center p-4">
          {todoList.map((item, index) => (
            <div
              key={index}
              className={`w-full rounded-md px-2 flex gap-1 justify-between items-center shadow-md shadow-slate-700 ${
                item.status ? "bg-cyan-600/40" : "bg-transparent"
              }`}
            >
              <div className=" w-3/5">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={item.object}
                    onChange={(e) => handleInputChange(e, index)}
                    className="w-full text-white text-lg outline-none bg-transparent py-3 px-2"
                  />
                ) : (
                  <input
                    type="text"
                    value={item.object}
                    readOnly
                    className="w-full text-white text-lg outline-none bg-transparent py-3 px-2"
                  />
                )}
              </div>
              <div className="w-2/5 py-3 flex justify-between items-center gap-1">
                <button
                  onClick={() => removeTask(index)}
                  className="w-1/3 py-3 flex justify-center items-center text-white outline-none rounded-md bg-red-600 transition duration-75 hover:scale-95"
                >
                  <FaTrash />
                </button>
                <button
                  onClick={() => changeItemHandler(index)}
                  className="w-1/3 py-3 flex justify-center items-center text-white outline-none rounded-md bg-amber-400 transition duration-75 hover:scale-95"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => changeTask(index)}
                  className={`w-1/3 py-3 flex justify-center items-center text-white outline-none rounded-md transition duration-75 hover:scale-95 ${
                    item.status ? "bg-stone-600" : "bg-cyan-500"
                  }`}
                >
                  {item.status ? <MdRemoveDone /> : <MdDoneAll />}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-slate-200 lg:text-4xl text-lg">
            Please add a task
          </p>
        </div>
      )}
    </div>
  );
}

export default List;
