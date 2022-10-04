import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handelClick = (id) =>
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  if (!todos || !todos.length) {
    return <p>No Todos</p>;
  }

  return (
    <ul>
      {todos.map((todos) => (
        <li onClick={() => handelClick(todos.id)}>
          {handelClick}
          {todos.label}
        </li>
      ))}
    </ul>
  );
};

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = (event) => setNewTodo(event.target.value);
  const handelClick = () =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      },
    });

  return (
    <>
      <input value={newTodo} onChange={handleChange} type="text" />
      <button onClick={handelClick}>ADD TODO</button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TODOS</p>
        <Todos />
        <TodoInput />
      </header>
    </div>
  );
}

export default App;
