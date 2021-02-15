import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import CreateExercisePage from "../../pages/CreateExercisePage";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/create-exercise">
          <CreateExercisePage />
        </Route>
        <Route path="/">
          <Redirect to="/create-exercise" />;
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
