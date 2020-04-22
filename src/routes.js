import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard";
import Join from "./Pages/CreateJoinRoom";
import Register from "./Pages/Register/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/join" component={Join} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
