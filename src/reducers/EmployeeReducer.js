import { FETCH_ALL_EMPLOYEES, REGISTER_EMPLOYEE } from "../constants/ActionConstants";

export const employeeReducer = (state=[],action)=>{
    const {type,payload}=action;
    switch(type){
        case REGISTER_EMPLOYEE:return payload;
        case FETCH_ALL_EMPLOYEES:return payload;
        default: return state;
    }
}