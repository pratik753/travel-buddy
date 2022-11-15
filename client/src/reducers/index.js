import { combineReducers } from "redux";

import tours from "./tours";
import auth from "./auth";

export const reducers = combineReducers({ tours, auth });
