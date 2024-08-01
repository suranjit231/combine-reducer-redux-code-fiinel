const redux = require("redux");

// import counter reducer function here
import { timerReducer } from "./redux/reducers/timerReducer";
import { counterReducer } from "./redux/reducers/counterReducer";
import { combineReducers } from "redux";

// combine the reducer functions here
const rootReducer = combineReducers({
    timer:timerReducer,
    counter:counterReducer
})

// add the root reducer function to store here
export const store = redux.createStore(rootReducer);
