import { FETCH_ALL_EMPLOYEES, REGISTER_EMPLOYEE } from "../constants/ActionConstants";
import { getAllEmployees, saveEmployee } from "../services/EmployeeService"

export const registerEmployee = (employee)=>async(dispatch)=>{
        try {
             const response=await saveEmployee(employee);
             dispatch({
                type:REGISTER_EMPLOYEE,
                payload:response.data
            });
            return Promise.resolve()
        } catch (error) {
            return Promise.reject(error);
        }
        
    }

export const fetchAllEmployees=()=>async(dispatch)=>{
    try {
        const response=await getAllEmployees();
        dispatch({
            type:FETCH_ALL_EMPLOYEES,
            payload:response.data
        });

    } catch (error) {
        console.log(error);
    }
}