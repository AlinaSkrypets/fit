import ResponsiveDrawer from "../components/DrawerComponent";
import connect from "react-redux/lib/connect/connect";

function CreateExercisePage() {
  return (
    <>
      <h1>Create Exercise</h1>
      <ResponsiveDrawer />
    </>
  );
}

function mapStateToProps(state) {
  const { exerciseList, loading } = state.exercises;
  const { users } = state.users;
  return { exerciseList, users };
}

export default connect(mapStateToProps)(CreateExercisePage);
