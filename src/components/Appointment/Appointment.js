import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import AppointmnetBody from "./AppointmentBody/AppointmnetBody";
import Header from "./Header/Header";
const Appointment = () => {
  const [dateValue, setDateValue] = useState(new Date());
  return (
    <div>
      <Header dateValue={dateValue} setDateValue={setDateValue}></Header>
      <AppointmnetBody
        dateValue={dateValue}
        setDateValue={setDateValue}
      ></AppointmnetBody>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
