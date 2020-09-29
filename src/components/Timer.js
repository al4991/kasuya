import React, { useState, useEffect, useContext } from "react";
import CoffeeContext from "./../context/coffee/coffeeContext";

const Timer = () => {
  const coffeeContext = useContext(CoffeeContext);

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
    coffeeContext.timerToggled(isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className='app'>
      <div className='time'>
        <h1>{seconds}s</h1>
      </div>
      <div className='row'>
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className='button' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
