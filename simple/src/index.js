import counterSlice from "./counterSlice.js";
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
  store.dispatch(counterSlice.actions.increment());
});

document.getElementById("decrement").addEventListener("click", () => {
  store.dispatch(counterSlice.actions.decrement());
});

document.getElementById("incrementByAmount").addEventListener("click", () => {
  store.dispatch(counterSlice.actions.incrementByAmount(5));
});
