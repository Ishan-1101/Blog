import React from "react";
import "./Home.css";
import image from "../blob.svg";
function Home() {
  return (
    <div className="home-content">
      <img src={image} alt="" />
      <h2>Welcome To My Blog !</h2>
      <h4>Read and Learn</h4>
    </div>
  );
}

export default Home;
