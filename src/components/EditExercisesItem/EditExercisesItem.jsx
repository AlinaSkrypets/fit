import React from "react";
import "./EditExercisesItem.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

function EditExercisesItem({
  name,
  measurement,
  exerciseUpBtnHandler,
  exerciseDownBtnHandler,
  removeExerciseBtnHandler,
  handleChangeInput,
  id,
}) {
  return (
    <div className="exercise-item">
      <TextField onChange={handleChangeInput(id)} value={name} />
      <Select value={measurement}>
        <MenuItem value="kilograms">kilograms</MenuItem>
        <MenuItem value="minutes">minutes</MenuItem>
        <MenuItem value="kilometers">kilometers</MenuItem>
      </Select>
      <p>{measurement}</p>
      <button onClick={exerciseUpBtnHandler}>Up</button>
      <button onClick={exerciseDownBtnHandler}>Down</button>
      <button onClick={removeExerciseBtnHandler}>Remove Exercise</button>
    </div>
  );
}

export default EditExercisesItem;
