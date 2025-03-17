//import { Button, TextField } from "@mui/material";
//import todoType from "./components/todoType";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import AddComponent from "./components/AddComponent";
import DeleteComponent from "./components/DeleteComponent";
export type todoType = { id: string; name: string };
function App() {
  // Thuc hanh State
  const [todoList, setTodoList] = useState<todoType[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [newTodoDelete, setNewTodoDelete] = useState("");

  const [editValue, setEditValue] = useState("");
  const [editTarget, setEditTarget] = useState("");
  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleNewTodoDeleteChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTodoDelete(e.target.value);
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleEditTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTarget(e.target.value);
  };

  const handleNewTodoAdd = () => {
    const newTodoItem: todoType = {
      id: uuidv4(),
      name: newTodo,
    };
    setTodoList([newTodoItem, ...todoList]);
    setNewTodo("");
  };

  const handleTodoEdit = () => {
    setTodoList(
      todoList.map((todo) =>
        todo.name === editTarget ? { ...todo, name: editValue } : todo
      )
    );
    setEditValue("");
    setEditTarget("");
  };

  const handleNewTodoDelete = () => {
    setTodoList(todoList.filter((todo) => todo.name !== newTodoDelete));
    setNewTodoDelete("");
  };
  return (
    <>
      {/* State ds */}
      <p>This is todoType app</p>
      {/* Add */}
      <AddComponent
        handleNewTodoAdd={handleNewTodoAdd}
        newTodo={newTodo}
        handleNewTodoChange={handleNewTodoChange}
      />
      {/* Delete */}
      <DeleteComponent
        newTodoDelete={newTodoDelete}
        handleNewTodoDeleteChange={handleNewTodoDeleteChange}
        handleNewTodoDelete={handleNewTodoDelete}
      />
      {/* Edit */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={editTarget}
          onChange={handleEditTargetChange}
          placeholder="Enter name to edit"
        />
        <input
          type="text"
          value={editValue}
          onChange={handleEditInputChange}
          placeholder="Enter new name"
        />
        <button onClick={handleTodoEdit}>Edit</button>
      </div>
      <TodoList todoList={todoList} />
      {/* <div>
        <TextField
          size="small"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <Button
          onClick={handleNewTodoAdd}
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Add
        </Button>
      </div> */}

      {/* <div>
        {todoList.map((todoApp) => {
          return <todoType key={todoApp.id} name={todoApp.name} />;
        })}
      </div> */}
    </>
  );
}
export default App;
