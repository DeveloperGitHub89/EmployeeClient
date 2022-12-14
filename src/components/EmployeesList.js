import { StatusCodes } from "http-status-codes";
import { useEffect, useState } from "react";
import { Alert, Button, Container, Table } from "react-bootstrap";
import { getAllEmployees } from "../services/EmployeeService";

export function EmployeesList() {
    const [employees,setEmployees]= useState([]);
    const [employeeId,setEmployeeId]= useState('');
    useEffect(()=>{
       async function fetchEmployees(){
            const response=await getAllEmployees()
            if (response.status==StatusCodes.OK) {
                setEmployees(response.data)
            }
       }
       fetchEmployees();
    },[]);
    return (
        <>
            <Container className="mt-4 text-center">
                <Alert variant="success">
                    List of employees
                </Alert>
            </Container>
            <Container>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Salary</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((item)=>{
                            return (
                                <tr>
                                  <td>{item.empId}</td>
                                  <td>{item.name}</td>
                                  <td>{item.phone}</td>
                                  <td>{item.salary}</td> 
                                  <td><Button variant="danger" className="btn-sm" onClick={()=>{
                                    setEmployeeId(item._id);console.log(item._id);
                                    }
                                    }>Delete</Button></td> 
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}