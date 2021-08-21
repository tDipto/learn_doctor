import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import "./AppointmentModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AppointmentModal = ({
  modalIsOpen,
  closeModal,
  appointmentType,
  appointmentTime,
}) => {
  Modal.setAppElement("#root");
  const [appointmentData, setAppointmentData] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.appointmentType = appointmentType;
    data.appointmentTime = appointmentTime.toDateString();
    data.status = "Not Visit";
    fetch("http://localhost:3001/bookAppointment", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    closeModal();
    reset();
  };

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        /* onAfterOpen={afterOpenModal} */
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          type="button"
          class="card border-white px-4"
          style={{ width: "30rem" }}
        >
          <button onClick={closeModal} class="close text-right btn">
            <span>&times;</span>
          </button>
          <div class="card-body text-center p-0 span-design">
            <h5 style={{ color: "#1CC7C1" }} class="card-title mb-3">
              {appointmentType}
            </h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  class="form-control mb-2 "
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-group">
                <input
                  class="form-control mb-2"
                  placeholder="Phone Number"
                  {...register("phone", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.phone && <span>This field is required</span>}
              </div>
              <div className="form-group">
                <input
                  class="form-control mb-2"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-group">
                <input
                  disabled
                  class="form-control mb-2"
                  placeholder={appointmentTime.toDateString()}
                  /* value={appointmentTime.toDateString()} */
                  {...register("date", { required: false })}
                />
                {/* errors will return when field validation fails  */}
                {errors.date && <span>This field is required</span>}
              </div>
              <div className="form-group w-50 d-inline-block pr-2">
                <select
                  class="form-control mb-2 "
                  {...register("gender", { required: true })}
                >
                  <option selected disabled={true} value="">
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {/* errors will return when field validation fails  */}
                {errors.gender && <span>This field is required</span>}
              </div>
              <div className="form-group w-50 d-inline-block">
                <input
                  class="form-control mb-2"
                  placeholder="Age"
                  {...register("age", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.age && <span>This field is required</span>}
              </div>
              <div className="text-right">
                <input className="btn text-right" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
