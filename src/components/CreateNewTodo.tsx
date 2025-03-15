import { Button, TextField } from "@mui/material";
import React from "react";
type props = {
  newTodo: string;
  handleNewTodoAdd: () => void;
  handleNewTodoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const CreateNewTodo = ({
  newTodo,
  handleNewTodoAdd,
  handleNewTodoChange,
}: props) => {
  return (
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
  );
};

export default CreateNewTodo;
