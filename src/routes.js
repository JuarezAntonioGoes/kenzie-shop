import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Intro from "./pages/Intro";
import User from "./pages/User";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>

        <Route exact path="/user">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;