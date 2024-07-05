import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";

const CardComp = ({ img, rate, name, plasticMaterial, id }) => {
  const toLink = `/photos/${id}`;

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          width="auto"
          height="300px"
          src={img}
          alt={name}
        />
        <div className="card-body">
          <p className="card-text">Product Name : {name}</p>
          <p className="card-text">Plastic used : {plasticMaterial}</p>
          <p className="card-text">Rate : {rate}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={toLink} className="btn btn-sm btn-outline-secondary">View Photos</Link>
            </div>
            <small className="text-body-secondary">Available</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
