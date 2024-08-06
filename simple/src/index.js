import { decrement, increment, incrementByAmount } from "./counterSlice.js";
import store from "./store.js";

// Function to update the UI with the current state
const updateUI = () => {
  const state = store.getState();
  document.getElementById("count").innerText = state.counter.count;
};

// Subscribe to store updates
store.subscribe(updateUI);

// Initial UI update
updateUI();

// Add event listeners to buttons
document.getElementById("increment").addEventListener("click", () => {
  store.dispatch(increment());
});

document.getElementById("decrement").addEventListener("click", () => {
  store.dispatch(decrement());
});

document.getElementById("incrementByAmount").addEventListener("click", () => {
  store.dispatch(incrementByAmount(5));
});
