import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import CreateExercisePage from  '../../pages/CreateExercisePage'


function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/create-exercise">
                        <CreateExercisePage />
                    </Route>
                    <Route path="/">
                        <Redirect to="/create-exercise" />;
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter