import React from "react";
import { connect } from "react-redux";
import { exercisesActions } from "../store/actions";

function EditExercisesWrapper({ exercisesList, removeExercise, exerciseUp, exerciseDown }) {

  const removeExerciseBtnHandler = (index) => () => {
    removeExercise(index);
  };

  const exerciseUpBtnHandler = (index) => () => {
    console.log('index=',index);

    if(index !== 0 ) {
      exerciseUp(index);

    }
  };

  const exerciseDownBtnHandler = (index) => () => {
    console.log('index=',index);
    console.log('exercisesList.length',exercisesList.length);

    if(index !== exercisesList.length - 1 ) {
      exerciseDown(index);
    }
  };

  return (
     <>
      <h1>Edit Exercises</h1>
      {exercisesList.map((item, index) => (
        <div key={item.id}>
          <p>{item.exerciseName}</p>
          <p>{item.exerciseMeasurement}</p>
          <button onClick={exerciseUpBtnHandler(index)}>Up</button>
          <button onClick={exerciseDownBtnHandler(index)}>Down</button>
          <button onClick={removeExerciseBtnHandler(index)}>
            Remove Exercise
          </button>
        </div>
      ))}
      {/*<EditExercisesItem></EditExercisesItem>*/}
    </>
  );
}

const mapStateToProps = (state) => {
  const { exercisesList } = state.exercises; //get variable "exerciseList" from redux state
  return { exercisesList }; //put variable "exerciseList" inside exerciseList field. And return object with one option
  //Because mapStateToProps and mapDispatchToProps functions should return just objects!
};

// function mapDispatchToProps(dispatch) {
const mapDispatchToProps = (dispatch) => {
  return {
    removeExercise: (payload) =>
      dispatch(exercisesActions.removeExercise(payload)),
    exerciseUp: (payload) => dispatch(exercisesActions.exerciseUp(payload)),
    exerciseDown: (payload) => dispatch(exercisesActions.exerciseDown(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExercisesWrapper);
