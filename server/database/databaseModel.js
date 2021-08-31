const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {},
  {
    strict: false,
  }
);
const doctorSchema = mongoose.Schema(
  {},
  {
    strict: false,
  }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = { Appointment, Doctor };
