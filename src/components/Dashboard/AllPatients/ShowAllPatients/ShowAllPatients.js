import React from "react";

const ShowAllPatients = ({ appointment }) => {
  return (
    <div>
      <table class="table">
        <thead
          style={{ backgroundColor: "#1CC7C1", borderLeft: "2px solid black" }}
          class="thead"
        >
          <tr>
            <th className="text-center" scope="col">
              Serial
            </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Service</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointment.map((pd, index) => (
            <tr>
              <td className="text-center">{index + 1}</td>
              <td>{pd.name}</td>
              <td>{pd.email}</td>
              <td>{pd.gender}</td>
              <td>{pd.age}</td>
              <td>{pd.appointmentType}</td>
              <td>{pd.appointmentTime}</td>
              {pd.status === "Not Visit" ? (
                <td style={{ color: "red" }}>{pd.status}</td>
              ) : (
                <td style={{ color: "green" }}>{pd.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAllPatients;
