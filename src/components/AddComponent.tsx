import { Button, TextField } from "@mui/material";
import React from "react";
type addType = {
  newTodo: string;
  handleNewTodoAdd: () => void;
  handleNewTodoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const CreateNewTodoAdd = ({
  newTodo,
  handleNewTodoAdd,
  handleNewTodoChange,
}: addType) => {
  return (
    <div>
      <TextField
        size="small"
        id="outlined-basic"
        label="Outlined"
        placeholder="Enter name to add"
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

export default CreateNewTodoAdd;
