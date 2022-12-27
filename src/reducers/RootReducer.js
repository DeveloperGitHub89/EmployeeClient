import { combineReducers } from "redux";
import { employeeReducer } from "./EmployeeReducer";

export const rootReducer=combineReducers({employeeReducer})