import React from "react";

const PourCard = ({ amount, label, dimmed }) => {
  return (
    <div>
      <h1>{label}</h1>
      <p>{amount}g</p>
    </div>
  );
};

export default PourCard;
