import React from "react";

const ShowDashboardPatient = ({ patients }) => {
  const handleChange = (e) => {
    /* console.log(e.target.id, e.target.value); */
    /* console.log(e.target.name); */

    fetch("http://localhost:3001/updateStatus/" + e.target.name, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: e.target.value }),
    });
  };

  /*  useEffect(() => {
    
  }, [isVisit]); */
  return (
    <table class="table border">
      <thead style={{ backgroundColor: "#1CC7C1" }} class="">
        <tr>
          <th scope="col">Index</th>
          <th scope="col">Name</th>

          <th scope="col">age</th>
          <th scope="col">Sevice</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((pd, index) => (
          <tr>
            {/*  {console.log(pd)} */}

            <th scope="row">{index + 1}</th>
            <td>{pd.name}</td>

            <td>{pd.age}</td>
            <td>{pd.appointmentType}</td>
            <td>
              <select
                class="form-control"
                id="data1"
                name={pd._id}
                defaultValue={pd.status}
                onChange={handleChange}
              >
                <option value="Not Visit">Not Visited</option>
                <option value="Visit">Visited</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShowDashboardPatient;
