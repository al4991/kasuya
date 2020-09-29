import React, { useState, useContext } from "react";
import { roundForStrength } from "../../logic";
import CoffeeContext from "./../../context/coffee/coffeeContext";

const TotalCoffeeCard = () => {
  const coffeeContext = useContext(CoffeeContext);
  const { totalCoffee } = coffeeContext;
  const [editable, setEditable] = useState(true);

  return (
    <div>
      <h1>Beans: {Math.trunc(roundForStrength(totalCoffee / 15))}g</h1>
      <h1>Coffee: {Math.trunc(totalCoffee)}g</h1>
    </div>
  );
};

export default TotalCoffeeCard;
