import React from "react";

function Card({ id, avatar, fullName, desc, onClick }) {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img src={avatar} className="card-img-top" alt={fullName} />
        <div className="card-body">
          <h5 className="card-title">{fullName}</h5>
          <p className="card-text">{desc}</p>
          <button className="btn btn-danger" onClick={() => onClick(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
