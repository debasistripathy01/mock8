import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { proReducer } from "./products.reducer";

const rootreducer = combineReducers({
  proReducer: proReducer,
});

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
