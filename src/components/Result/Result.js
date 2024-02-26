import "./Result.css";
import React from "react";
import myImage from "../../Oval.png";
function Result() {
  return (
    <div className="result-div">
      <h3 className="result-outcome">Your Result</h3>
      <img src={myImage} alt="result background" />
      <div className="result-info">
        <span className="num">76</span>
        <p>of 100</p>
      </div>
      <div className="description">
        <h4>Great</h4>
        <p>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
}
export default Result;
