import { faFacebook, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { CheckLoginContext } from "../../App";
import login_bg from "../../images/login-bg.png";
import { googleSignIn, jwtoken } from "./Firebase/firebase";

const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(CheckLoginContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = { from: { pathname: "/" } };
  /* let { from } = location.state || { from: { pathname: "/" } }; */

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      const newLogin = {
        ...loggedIn,

        name: res.displayName,
        email: res.email,
      };
      sessionStorage.setItem("login", true);
      setLoggedIn(newLogin);
      sessionStorage.setItem("email", res.email);
      jwtoken();
      history.replace(from);
    });
  };
  /*  const [admin, setAdmin] = useState(false); */
  useEffect(() => {
    fetch(
      "http://localhost:3001/admin?email=" + sessionStorage.getItem("email")
    )
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("admin", data);
        /*  console.log(admin); */
      });
  }, [loggedIn]);
  return (
    <div>
      {/* {console.log(loggedIn)} */}
      <div className="row">
        <div className="col-md-6 align-self-center">
          <h2 className="text-center mb-3">Login</h2>
          <div className="google d-flex justify-content-center mb-2 ">
            <button
              onClick={handleGoogleSignIn}
              className="btn text-white"
              style={{ backgroundColor: "#1CC7C1" }}
            >
              Sign in with Google{" "}
              <FontAwesomeIcon icon={faGooglePlusG} color="white" size="lg" />
            </button>
          </div>
          <div className="facebook d-flex justify-content-center">
            <button
              className="btn text-white"
              style={{ backgroundColor: "#1CC7C1" }}
            >
              Sign in with Facebook{" "}
              <FontAwesomeIcon icon={faFacebook} color="white" size="lg" />
            </button>
          </div>
        </div>
        <div className="col-md-6 text-right">
          <img
            style={{ height: "90vh" }}
            className="img-fluid"
            src={login_bg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
