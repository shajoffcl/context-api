import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./components/welcome";
import ToDo from "./components/To-Do-App/index";
import Calculator from "./components/Calculator/index";
import Alarm from "./components/Alarm-App/index";
import ContextUse from "./components/ContextUse/counter";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/todo" component={ToDo} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/alarm" component={Alarm} />
        <Route exact path="/global" component={ContextUse} />
        <Redirect to="/"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
