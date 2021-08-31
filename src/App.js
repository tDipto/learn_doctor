import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthenticateAdmin from "./components/Authenticate/AuthenticateAdmin.js";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
export const CheckLoginContext = createContext();
function App() {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <div>
      <CheckLoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <AuthenticateAdmin path="/dashboard">
              <Dashboard></Dashboard>
            </AuthenticateAdmin>
            <Route path="*">EORROR</Route>
          </Switch>
        </Router>
      </CheckLoginContext.Provider>
    </div>
  );
}

export default App;
