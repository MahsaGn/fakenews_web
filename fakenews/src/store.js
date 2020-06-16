import { homePage_reducer } from "./core/homePage/homePage_reducer";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { stat } from "fs";

const allReducers = combineReducers({
  homePage_reducer
});
function saveToLocalStorage(state) {
  try {
    console.log("this is current state", state);
    let preState = {
      login_reducer: state.login_reducer
    };
    const serializedState = JSON.stringify(preState);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.lod(e);
  }
}
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
const presistedState = loadFromLocalStorage();
const composeEnhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
console.log("store is created");
const store = createStore(allReducers, presistedState, composeEnhancer);
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
