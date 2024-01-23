import { combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { authReducer } from "./authReducer";
import { foodReducer } from "../food/foodReducer";
import {createStore,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"

 const rootReducer = combineReducers({
 auth: authReducer,
 food: foodReducer,
});
const enhancers = composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  );


export const store =createStore(rootReducer,enhancers)