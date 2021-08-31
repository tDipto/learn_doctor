import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashboardCalender from "./DashboardCalender/DashboardCalender";
import DashboardPatients from "./DashboardPatients/DashboardPatients";

const Dashboard = () => {
  const [dateValue, setDateValue] = useState(new Date());
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5 d-flex justify-content-center align-self-center ">
          <DashboardCalender
            dateValue={dateValue}
            setDateValue={setDateValue}
          ></DashboardCalender>
        </div>
        <div className="col-md-5">
          <DashboardPatients dateValue={dateValue}></DashboardPatients>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
