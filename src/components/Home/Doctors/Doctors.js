import React, { useEffect, useState } from "react";
import DoctorsInfo from "./DoctorsInfo/DoctorsInfo";
/* const doctors = [
  {
    name: "Dr Jon",
    phone: "017122222222",
    pic: "p1.png",
  },
  {
    name: "Dr Jon",
    phone: "017122222222",
    pic: "p2.png",
  },
  {
    name: "Dr Jon",
    phone: "017122222222",
    pic: "p3.png",
  },
]; */
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/showAllDoctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-5">
        <h1 style={{ color: "#1CC7C1" }}>Our Doctors</h1>
      </div>
      <div className="d-flex justify-content-center w-75 m-auto">
        <div className="row mt-3">
          {doctors.map((pd) => (
            <DoctorsInfo doctor={pd}></DoctorsInfo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
