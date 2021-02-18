import React, { useState } from "react";
import { connect } from "react-redux";
import { exercisesActions } from "../../store/actions";
import EditExercisesItem from "../EditExercisesItem/EditExercisesItem";

function EditExercisesWrapper({
  exercisesList,
  removeExercise,
  exerciseUp,
  exerciseDown,
}) {
  const [exercisesListLocal, setExercisesListLocal] = useState([
    ...exercisesList,
  ]);

  // REMOVE EXERCISE
  const removeExerciseBtnHandler = (index) => () => {
    console.log("removehandler");
    removeExercise(index);
  };

  // MOVE EXERCISE UP
  const exerciseUpBtnHandler = (index) => () => {
    if (index !== 0) {
      exerciseUp(index);
    }
  };

  // MOVE EXERCISE DOWN
  const exerciseDownBtnHandler = (index) => () => {
    if (index !== exercisesList.length - 1) {
      exerciseDown(index);
    }
  };

  const handleChangeInput = (id) => (event) => {
    console.log(event.target.value);
    // id find exerciselist
    //setExercisesListLocal
  };

  return (
    <>
      <h1>Edit Exercises</h1>
      {exercisesListLocal.map((item, index) => (
        // One Exercise
        <EditExercisesItem
          key={item.id}
          name={item.exerciseName}
          handleChangeInput={handleChangeInput}
          measurement={item.exerciseMeasurement}
          id={item.id}
          removeExerciseBtnHandler={removeExerciseBtnHandler(index)}
          exerciseUpBtnHandler={exerciseUpBtnHandler(index)}
          exerciseDownBtnHandler={exerciseDownBtnHandler(index)}
        />
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  const { exercisesList } = state.exercises;
  return { exercisesList };
};

const mapDispatchToProps = (dispatch) => ({
  removeExercise: (payload) =>
    dispatch(exercisesActions.removeExercise(payload)),
  exerciseUp: (payload) => dispatch(exercisesActions.exerciseUp(payload)),
  exerciseDown: (payload) => dispatch(exercisesActions.exerciseDown(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExercisesWrapper);
