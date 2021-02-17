import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function EditExercisesItem() {
  return (
    <>
      <h1>EditExercisesItem</h1>
      <TextField label="Exercise name" />
      <div>
        <Select>
           <MenuItem value="kilograms">kilograms</MenuItem>
          <MenuItem value="minutes">minutes</MenuItem>
          <MenuItem value="kilometers">kilometers</MenuItem>
        </Select>
      </div>
    </>
  );
}

export default EditExercisesItem;
