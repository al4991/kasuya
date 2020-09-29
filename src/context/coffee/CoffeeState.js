import React, { useReducer } from "react";
import CoffeeContext from "./coffeeContext";
import CoffeeReducer from "./coffeeReducer";
import {
  SET_COFFEE,
  SET_COFFEE_FROM_BEANS,
  UPDATE_POURS,
  UPDATED_DIMMED,
  TIMER_TOGGLED,
} from "../types";

const CoffeeState = (props) => {
  const initialState = {
    totalCoffee: 500, //beans is always total coffee / 15
    pours: [100, 100, 100, 100, 100],
    dimmed: [false, false, false, false, false],
    timerActive: false,
  };

  const [state, dispatch] = useReducer(CoffeeReducer, initialState);

  const setCoffee = (coffee) => {
    dispatch({
      type: SET_COFFEE,
      payload: coffee,
    });
  };
  const setCoffeeFromBeans = (beans) => {
    dispatch({
      type: SET_COFFEE_FROM_BEANS,
      payload: beans * 15,
    });
  };

  const updatePours = (newPours) => {
    dispatch({
      type: UPDATE_POURS,
      payload: newPours,
    });
  };

  const timerToggled = (isActive) => {
    dispatch({
      type: TIMER_TOGGLED,
      payload: isActive,
    });
  };

  return (
    <CoffeeContext.Provider
      value={{
        totalCoffee: state.totalCoffee,
        pours: state.pours,
        dimmed: state.dimmed,
        timerActive: state.timerActive,
        setCoffee,
        setCoffeeFromBeans,
        updatePours,
        timerToggled,
      }}
    >
      {props.children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeState;
