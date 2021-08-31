import React from "react";
import { useForm } from "react-hook-form";

const DoctorAdd = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    /* console.log(data); */
    const formData = new FormData();
    formData.append("picture", data.picture[0]);
    formData.append("name", data.name);
    formData.append("email", data.email);

    fetch("http://localhost:3001/addDoctor", {
      method: "POST",

      body: formData,
    });
    reset();
  };
  return (
    <div className="form-container w-50">
      <form
        className=" "
        onSubmit={handleSubmit(onSubmit)}
        /*    enctype="multipart/form-data" */
      >
        <div className="form-group">
          <label className="form-text" htmlFor="">
            Name : &nbsp;
          </label>
          <input
            className="form-control"
            {...register("name", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.name && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label className="form-text" htmlFor="">
            Email : &nbsp;
          </label>
          <input
            className="form-control"
            {...register("email", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label className="" htmlFor="">
            Upload Picture : &nbsp;
          </label>
          <input
            type="file"
            className="btn"
            {...register("picture", { required: true })}
          />
          <br />
          {/* errors will return when field validation fails  */}
          {errors.picture && (
            <p style={{ color: "red", textAlign: "center" }}>
              This field is required
            </p>
          )}
        </div>

        <input
          style={{ backgroundColor: "#1CC7C1", color: "white" }}
          className="btn"
          type="submit"
        />
      </form>
    </div>
  );
};

export default DoctorAdd;
