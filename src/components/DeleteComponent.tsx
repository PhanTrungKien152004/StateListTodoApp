import { Button, TextField } from "@mui/material";
import React from "react";
export type deleteType = {
  newTodoDelete: string;
  handleNewTodoDeleteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNewTodoDelete: () => void;
};
const CreateNewTodoDelete = ({
  newTodoDelete,
  handleNewTodoDeleteChange,
  handleNewTodoDelete,
}: deleteType) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <TextField
        size="small"
        id="outlined-basic"
        label="Outlined"
        placeholder="Enter name to delete"
        variant="outlined"
        value={newTodoDelete}
        onChange={handleNewTodoDeleteChange}
      />
      <Button
        onClick={handleNewTodoDelete}
        sx={{ textTransform: "capitalize" }}
        variant="contained"
      >
        Delete
      </Button>
    </div>
  );
};

export default CreateNewTodoDelete;
