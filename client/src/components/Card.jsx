import React from "react";

const Card = (props) => {
  return (
    <div class="card custom-card" style={{ width: "15rem" }}>
      <div class="card-body">
        <div className="box1">
          <div className="box2">
            <h6 class="card-subtitle mb-2 text-body-secondary">{props.id}</h6>
            <h6 class="card-title">{props.userid}</h6>
          </div>

          <p class="card-text">{props.title}</p>
          <div style={{ display: "flex" }}>
            <i class="fa-solid fa-circle-exclamation custom-icon" />

            <div className="ms-2 feature-box" style={{ display: "flex" }}>
              <i class="fa-solid fa-circle fa-xs custom-icon "></i>
              <p class="card-text ms-1 mt-0  ">{props.tag[0]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
