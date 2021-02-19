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

  // // MOVE EXERCISE UP
  // const exerciseUpBtnHandler = (index) => () => {
  //   if (index !== 0) {
  //     exerciseUp(index);
  //   }
  // };

  // // MOVE EXERCISE DOWN
  // const exerciseDownBtnHandler = (index) => () => {
  //   if (index !== exercisesList.length - 1) {
  //     exerciseDown(index);
  //   }
  // };

  //CHANGE EXERCISE POSITION
  const exerciseChangePosition = (currentIndex, targetIndex) => () => {
    let lastExerciseIndex = exercisesList.length - 1;

    let payload = { currentIndex, targetIndex };
    console.log("payload=", payload);

    if (currentIndex !== 0 && targetIndex !== -1) {
      console.log("not first");
    }
    // exerciseChangePosition(payload);

    // console.log(currentIndex, targetIndex);
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
          index={index}
          removeExerciseBtnHandler={removeExerciseBtnHandler(index)}
          exerciseChangePosition={exerciseChangePosition}
          exerciseDownBtnHandler={exerciseChangePosition}
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
  exerciseChangePosition: (payload) =>
    dispatch(exercisesActions.exerciseChangePosition(payload)),
  // exerciseUp: (payload) => dispatch(exercisesActions.exerciseUp(payload)),
  // exerciseDown: (payload) => dispatch(exercisesActions.exerciseDown(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExercisesWrapper);
