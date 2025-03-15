import { Button } from "@mui/material";
import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
const Todo = ({ name }: { name: string }) => {
  return (
    <div>
      <Button
        style={{ justifyContent: "space-between" }}
        fullWidth
        endIcon={<CheckBoxOutlineBlankIcon />}
      >
        {name}
      </Button>
    </div>
  );
};

export default Todo;
