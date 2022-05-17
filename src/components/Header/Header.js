import React from "react";
import "./Header.css";
import houselogo from "../../images/houselogo.png";

const ExpenseDate = () => {
  const month = 32;

  return (
    <div className="header">
      <div className="title-and-icon">
        <img src={houselogo} width={50} height={50} alt="House Icon" />
        <h2>Home $weet Home</h2>
      </div>
      <h5>Easily track the expenses of your house.</h5>
    </div>
  );
};

export default ExpenseDate;
