import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CheckLoginContext } from "../../App";
import AllPatients from "./AllPatients/AllPatients";
import DashboardHome from "./DashboardHome/DashboardHome";
import Doctors from "./Doctors/Doctors";
const Dashboard = () => {
  const { loggedIn } = useContext(CheckLoginContext);
  return (
    <div>
      {console.log(loggedIn)}
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <DashboardHome></DashboardHome>
          </Route>
          <Route exact path="/dashboard/patients">
            <AllPatients></AllPatients>
          </Route>
          <Route exact path="/dashboard/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="*">
            <h1>404 ERROR</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
