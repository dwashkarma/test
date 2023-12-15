import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
function PageComponent({ title, description, image, url, source }) {
  return (
    <div className="card  my-3" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={image}
        alt="Cardcap"
        style={{
          maxHeight: 150,
        }}
      />
      {/* badge name defining from the source of the api  */}
      <span
        className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
        style={{
          zIndex: 1,
          left: "90%",
        }}
      >
        {source.slice(0, 10)}
      </span>
      <div className="card-body">
        <h5 className="card-title text-uppercase fw-semibold">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={url} className="btn btn-success">
          Visit
        </Link>
      </div>
    </div>
  );
}

export default PageComponent;
