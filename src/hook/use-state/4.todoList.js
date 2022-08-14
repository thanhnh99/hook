import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");

  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) ?? [];
  });

  console.log(todo);
  function handleClick() {
    setTodoList((prev) => {
      const newTodoList = [...prev, todo];
      console.log("New todo list:", newTodoList);
      localStorage.setItem("todos", JSON.stringify(newTodoList));
      return newTodoList;
    });
    setTodo("");
  }

  return (
    <div>
      <div className="form">
        <input onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button onClick={handleClick}>Add</button>
      </div>
      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li key={index}> {todo} </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
