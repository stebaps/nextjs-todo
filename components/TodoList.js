import { useEffect, useState } from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";

const TodoList = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setTodos(json);
      });
  }, []);

  const orderedTodos = (unorderedTodos) => {
    return unorderedTodos.sort((todoA, todoB) => {
      if (Number(todoA.complete) < Number(todoB.complete)) return 1;
      if (Number(todoA.complete) > Number(todoB.complete)) return -1;

      if (todoA.createdAt < todoB.createdAt) return -1;
      if (todoA.createdAt > todoB.createdAt) return 1;

      return 0;
    });
  };

  const onTodoUpdated = (todo) => {
    const todoIndex = todos.findIndex(
      (todoElement) => todoElement.id == todo.id
    );
    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = {
      ...updatedTodos[todoIndex],
      complete: todo.complete,
    };

    setTodos(orderedTodos(updatedTodos));

    fetch(`/api/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        text: todo.text,
        complete: todo.complete,
      },
    }).then((response) => response.json());
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
    <div className="bg-gray-200 border-0 rounded-none md:rounded-lg h-screen md:h-auto flex-grow m-auto p-5 shadow-lg">
      <div className="text-2xl font-semibold pb-5">My Todos</div>
      {loading && <div className="text-center text-2xl py-5">Loading...</div>}
      {todos.length > 0 && (
        <>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onTodoUpdated={onTodoUpdated} />
          ))}
          <NewTodo onNewTodo={onNewTodo} />
        </>
      )}
    </div>
  );
};

export default TodoList;
