import React, { useState } from "react";
import AppointmentModal from "./AppointmentModal/AppointmentModal";

const AppointmentShow = ({ appointments, time }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  /* 
   function afterOpenModal() {
     // references are now sync'd and can be accessed.
     subtitle.style.color = "#f00";
   } */

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 px-0 d-flex justify-content-center">
      <div style={{}} className="col-container">
        <div class="card mb-4" style={{ width: "18rem" }}>
          <div class="card-body text-center">
            <h5 style={{ color: "#1CC7C1" }} class="card-title">
              {appointments.title}
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">{appointments.time}</h6>
            <p class="card-text">{appointments.space} SPACES AVAILABLE</p>
            <button
              style={{ backgroundColor: "#1CC7C1" }}
              class=" btn text-white"
              onClick={openModal}
            >
              BOOK APPOINTMENT
            </button>

            <AppointmentModal
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              appointmentType={appointments.title}
              appointmentTime={time}
            ></AppointmentModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentShow;
