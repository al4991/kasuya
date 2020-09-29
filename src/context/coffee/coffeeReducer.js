import {
  SET_COFFEE,
  SET_COFFEE_FROM_BEANS,
  UPDATE_POURS,
  UPDATED_DIMMED,
  TIMER_TOGGLED,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_COFFEE:
    case SET_COFFEE_FROM_BEANS:
      return {
        ...state,
        totalCoffee: action.payload,
      };
    case UPDATE_POURS:
      return {
        ...state,
        pours: [...action.payload],
      };
    case TIMER_TOGGLED:
      return {
        ...state,
        timerActive: action.payload,
      };
    default:
      return state;
  }
};
