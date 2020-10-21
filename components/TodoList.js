import { useEffect, useState } from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const onTodoUpdated = (todo) => {
    fetch(`/api/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        text: todo.text,
        complete: todo.complete,
      },
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        console.log(updatedTodo);
      });
  };

  const onNewTodo = (todoText) => {
    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        todo: todoText,
      },
    })
      .then((response) => response.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  };

  return (
    <div className="bg-gray-200 border-0 rounded-none md:rounded-lg p-5 shadow-lg">
      <div className="text-2xl font-semibold pb-5">My Todos</div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onTodoUpdated={onTodoUpdated} />
      ))}
      <NewTodo onNewTodo={onNewTodo} />
    </div>
  );
};

export default TodoList;
