import React from "react";
import "./App.css";
import Start from "./components/Start";
import TotalCoffeeCard from "./components/layout/TotalCoffeeCard";
import Timer from "./components/Timer";
import CoffeeState from "./context/coffee/CoffeeState";

function App() {
  return (
    <CoffeeState>
      <div className='top-row'>
        <TotalCoffeeCard />
        <Timer />
      </div>
    </CoffeeState>
  );
}

export default App;
