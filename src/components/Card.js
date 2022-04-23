import React from "react";
import "./Card.css";

function Card({ title1, imageUrl1, body1, title2, imageUrl2, body2 }) {
  return (
    <div className="wrapper">
      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl1} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{title1}</h3>
          </div>
          <div className="card-body">
            <p>{body1}</p>
          </div>
        </div>
        <div className="btn">
          <button>
            <a href="https://ishans.notion.site/Redux-ceef36ab99d345e3be396504aac5f22d">
              View more
            </a>
          </button>
        </div>
      </div>

      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl2} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{title2}</h3>
          </div>
          <div className="card-body">
            <p>{body2}</p>
          </div>
        </div>
        <div className="btn">
          <button>
            <a href="https://ishans.notion.site/React-Router-f8c2f5fda4604978889465b60ec9ae4e">
              View more
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
