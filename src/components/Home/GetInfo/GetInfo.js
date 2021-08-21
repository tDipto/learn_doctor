import React from "react";
import { useForm } from "react-hook-form";
import "./GetInfo.css";

const GetInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="background-form mt-5">
      <div className="text-center  d-flex align-items-center justify-content-center">
        <div className="">
          <div>
            <h4 style={{ color: "#1CC7C1" }}>CONTACT US</h4>
            <h1 style={{ color: "#ffffff" }}>Always Connect with Us</h1>
          </div>
          <div className="main-from mt-5">
            <div className="w-25">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  className="form-control"
                  {...register("email", { required: true })}
                  placeholder="Email"
                />
                {errors.email && <span>This field is required</span>}
                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <input
                  className="form-control"
                  {...register("subject", { required: true })}
                  placeholder="Subject"
                />
                {/* errors will return when field validation fails  */}
                {errors.subject && <span>This field is required</span>}
                <br />
                <textarea
                  style={{ height: "30vh", resize: "none" }}
                  className="form-control "
                  rows="3"
                  {...register("message", { required: true })}
                  placeholder="Your Message"
                />
                {/* errors will return when field validation fails  */}
                {errors.message && <span>This field is required</span>} <br />
                <br />
                <input
                  className="btn"
                  type="submit"
                  style={{ backgroundColor: "#1CC7C1" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInfo;
