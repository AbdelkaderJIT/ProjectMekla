import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { foodReducer } from "../food/foodReducer";
import {createStore,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"

 const rootReducer = combineReducers({
 auth: authReducer,
 food: foodReducer,
});

export const store =createStore(rootReducer,applyMiddleware(thunk))