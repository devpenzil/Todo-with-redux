import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoSlice, { addingtodo, deletingtodo } from "./Store_tool/Todo/TodoSlice";
function App() {
  let todostore = useSelector((state) => state.todos.value);
  console.log(todostore);
  const dispatch = useDispatch();
  const [singleTodo, setSingleTodo] = useState("");
  const addingTodo = (e) => {
    e.preventDefault();
    // if (singleTodo == "") {
    //   alert("Enter a Todo Item");
    //   return 0;
    // }
    dispatch(addingtodo(singleTodo));
    setSingleTodo("");
  }
  const deletetodos = (id) => {
    dispatch(deletingtodo(id));
  }
  return (
    <div className="App">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="todo-card w-80 p-2 bg-yellow-400 h-screen overflow-x-auto">
          <div className="text-center text-3xl text-yellow-900 font-bold">
            Hey Buddy
          </div>
          <form onSubmit={addingTodo}>
            <input
              autoFocus
              value={singleTodo}
              onChange={(e) => setSingleTodo(e.target.value)}
              className="p-2 w-full mt-6 outline-none shadow border-0 bg-yellow-300 placeholder-yellow-900"
              type="text"
              placeholder="Enter your task here"
            />
          </form>
          <div className="todos">
            {todostore.map((obj , id)=>{
            return(
              <div key={id} className="mt-2 p-2 bg-yellow-300 shadow flex justify-between">
              <div>{obj}</div>
              <div className="cursor-pointer" onClick={()=>deletetodos(id)}>🗑</div>
              </div>
            )
          })}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
