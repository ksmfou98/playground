import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./test";

const rootReducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
export default store;
