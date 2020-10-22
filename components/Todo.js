import { useState } from "react";

const Todo = (props) => {
  const [todo, setTodo] = useState(props.todo);

  const onChange = (event) => {
    const updatedTodo = {
      id: todo.id,
      text: todo.text,
      complete: event.target.checked,
    };

    setTodo(updatedTodo);

    props.onTodoUpdated(updatedTodo);
  };

  return (
    <div>
      <div
        className={`${
          todo.complete ? "bg-gray-500" : "bg-purple-600"
        } text-white rounded-lg shadow-lg p-5 mb-5 flex`}
      >
        <span className={`flex-grow ${todo.complete ? "line-through" : ""}`}>
          {todo.text}{" "}
        </span>
        <input
          type="checkbox"
          className="flex-none form-checkbox mt-1"
          checked={todo.complete}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Todo;
