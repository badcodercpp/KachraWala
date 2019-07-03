import { createStore } from "redux";
import { demoReducer } from "./../reducer/demoReducer";

export const demoStore = createStore(demoReducer);
