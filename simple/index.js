import { legacy_createStore as createStore } from "redux";

// Actions
const CAKE_ORDERED = "CAKE_ORDERED";
function orderCake() {
  return {
    type: "CAKE_ORDERED",
    quantity: 1,
  };
}

// Reducers
const initialState = {
  totalNoOfCakes: 10,
};

// (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        totalNoOfCakes: state.totalNoOfCakes - state.quantity,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
