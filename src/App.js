import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <h1>Bienvenue sur mon application</h1>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
