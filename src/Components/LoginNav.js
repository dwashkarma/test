import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function LoginNav() {
  return (
    <div
      className="bg-success w-100  position-fixed   text-light"
      style={{
        zIndex: 1,
      }}
    >
      <nav className="d-flex ">
        <p className=" mx-5 container my-1 text-uppercase  fs-3  fw-semibold">
          Portal
        </p>
      </nav>
    </div>
  );
}

export default LoginNav;
