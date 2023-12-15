import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import LoginNav from "../Components/LoginNav";
function LoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 0) {
      window.alert("Enter your email address");
    } else {
      navigate("/general");
    }
  };
  return (
    <div>
      <LoginNav />
      <div
        className="login"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          margin: 0,
          // backgroundColor: "#459c98",
          // color: "antiquewhite",
          fontWeight: 700,
          fontSize: "21px",
          fontFamily: "monospace",
        }}
      >
        <div
          className=" rounded-4  container w-50  shadow-lg"
          style={{
            width: "30%",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="card-body ">
            {/* <div className="card-title text-uppercase text-center fw-semibold  mt-4 h2">
              Login
            </div> */}
            <form onSubmit={handleSubmit} className="card-text p-4">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                value={email}
                type="email"
                className="form-control"
                placeholder="Enter your email..."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label>Password</label>
              <input
                type="password"
                id="inputPassword6"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-describedby="passwordHelpInline"
              />
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-light text-secondary fs-4 fw-semibold p-1 m-3"
                >
                  Login
                </button>
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  display: "flex",
                  color: "grey",
                  fontFamily: "fantasy",
                  justifyContent: "end",
                }}
              >
                No need to pass any data
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
