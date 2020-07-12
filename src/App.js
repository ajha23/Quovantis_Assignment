import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginPage } from "./pages/login";
import { DashBoard } from "./pages/dashboard";

import { UserDetails } from "./components/user-details/user-details";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path={"/users/:userId"} component={UserDetails} />
        <Route path="/users" component={DashBoard} />
      </Switch>
    </Router>
  );
}

export default App;
