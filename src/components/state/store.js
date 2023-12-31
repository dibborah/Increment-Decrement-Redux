import { createStore } from "redux";
import { applyMiddleware } from "redux";
import reducers from "./reducers/combineReducers";
import thunk from "redux-thunk";

const store = createStore(reducers,{},applyMiddleware(thunk));


export default store

