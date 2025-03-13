import { Button, TextField } from "@mui/material";
import Todo from "./components/Todo";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
type Todo = { id: string; name: string };
function App() {
  // Thuc hanh State
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleNewTodoAdd = () => {
    const newTodoItem: Todo = {
      id: uuidv4(),
      name: newTodo,
    };
    setTodoList([...todoList, newTodoItem]);
  };
  return (
    <>
      {/* Bai moi */}
      <p>This is todo app</p>
      <div>
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
      </div>

      <div>
        {todoList.map((todoApp) => {
          return <Todo name={todoApp.name} />;
        })}
      </div>
      <p>End</p>
    </>
  );
}
export default App;
