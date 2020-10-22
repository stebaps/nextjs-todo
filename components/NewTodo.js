import { useEffect, useRef, useState } from "react";

const NewTodo = ({ onNewTodo }) => {
  const [todo, setTodo] = useState("");

  const newTodoInputRef = useRef();

  useEffect(() => {
    if (newTodoInputRef.current) newTodoInputRef.current.focus();
  }, []);

  const onTodoChanged = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onNewTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <form className="flex" onSubmit={onSubmit}>
        <input
          ref={newTodoInputRef}
          name="todo"
          className="bg-white border-2 focus:border-purple-400 rounded-lg shadow-lg py-5 px-3 flex-grow"
          placeholder="What do you need to do?"
          value={todo}
          onChange={onTodoChanged}
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default NewTodo;
