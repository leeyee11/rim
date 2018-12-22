import { combineReducers } from "redux";
import session from "./session";
import basic from "./basic";

export default combineReducers({ session, basic });
