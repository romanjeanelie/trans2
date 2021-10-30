import React from "react";

const initialTodos = [
  {
    id: "Buy food",
    task: "Buy food"
  },
  {
    id: "Go home",
    task: "Go home"
  }
];

export default function List() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState(initialTodos);

  return (
    <div className="List__wrapper">
      <form
        onSubmit={e => {
          e.preventDefault();
          setTodos([...todos, { id: todo, task: todo }]);
          setTodo("");
        }}
      >
        <input
          value={todo}
          onChange={e => {
            setTodo(e.target.value);
          }}
        />
        <div className="List__App">
          <div className="List">
            {todos.map(todo => (
              <div
                key={todo.id}
                onClick={() => {
                  setTodos(todos.filter(i => i.id !== todo.id));
                }}
              >
                {todo.task}
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setTodos([]);
          }}
        >
          RESET
        </button>
      </form>
    </div>
  );
}
