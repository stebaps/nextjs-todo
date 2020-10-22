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

    if (todo.trim().length === 0) return;

    onNewTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <form className="relative" onSubmit={onSubmit}>
        <input
          ref={newTodoInputRef}
          name="todo"
          className="w-full bg-white border-2 focus:border-purple-400 rounded-lg shadow-lg py-5 px-3 flex-grow"
          placeholder="What do you need to do?"
          value={todo}
          onChange={onTodoChanged}
          autoComplete="off"
        />
        <div className="absolute inset-y-0 right-0 flex py-1">
          <button
            type="submit"
            data-testid="save-new-reminder"
            className="items-center pl-4 pr-5 text-sm text-cool-gray-700 hover:text-cool-gray-400"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="return"
                  transform="translate(2.000000, 1.837838)"
                  stroke="#010101"
                  stroke-width="2"
                >
                  <polyline
                    id="Path"
                    points="7 2.16216216 0 8.66216216 7 15.1621622"
                  ></polyline>
                  <polyline
                    id="Path"
                    points="17 0.162162162 17 8.16216216 0 8.16216216"
                  ></polyline>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
