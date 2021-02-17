import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import CreateExercisePage from "../../pages/CreateExercisePage";
import EditExercisePage from "../../pages/EditExercisePage";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/create-exercise">
          <CreateExercisePage />
        </Route>
        <Route path="/edit-exercise">
          <EditExercisePage />
        </Route>
        <Route path="/">
          <Redirect to="/create-exercise" />;
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
