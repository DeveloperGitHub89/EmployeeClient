import axios from "axios"
const BASE_URL='http://localhost:9000/employees'

export function saveEmployee(employee){
    return axios.post(BASE_URL, employee);
}

export function getAllEmployees(){
    return axios.get(BASE_URL);
}