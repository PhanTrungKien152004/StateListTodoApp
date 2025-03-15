//import { Button, TextField } from "@mui/material";
//import todoType from "./components/todoType";
import { SetStateAction, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateNewTodo from "./components/CreateNewTodo";
import TodoList from "./components/TodoList";
export type todoType = { id: string; name: string; isCompleted: boolean };
function App() {
  // Thuc hanh State
  const [todoList, setTodoList] = useState<todoType[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleNewTodoAdd = () => {
    const newTodoItem: todoType = {
      id: uuidv4(),
      name: newTodo,
      isCompleted: false,
    };
    setTodoList([newTodoItem, ...todoList]);
    setNewTodo("");
  };

  return (
    <>
      {/* State ds */}
      <p>This is todoType app</p>
      <CreateNewTodo
        handleNewTodoAdd={handleNewTodoAdd}
        newTodo={newTodo}
        handleNewTodoChange={handleNewTodoChange}
      />
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
