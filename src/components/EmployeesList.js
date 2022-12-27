import { StatusCodes } from "http-status-codes";
import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEmployees, deleteEmployeeAction } from "../actions/EmployeeActions";

export function EmployeesList() {
    const employees=useSelector(state=> state.employeeReducer);
    const dispatch=useDispatch();

    const [employeeId, setEmployeeId] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const closeModal= ()=>{
        setShowDialog(false);
    }
    const openModal= ()=>{
        setShowDialog(true);
    }
    
    const deleteEmployee = ()=>{
        dispatch(deleteEmployeeAction(employeeId)).then(()=>{
            closeModal();  
            dispatch(fetchAllEmployees());
        }).catch((error)=>{
            console.log(error);
        })
    }
    useEffect(() => {
        dispatch(fetchAllEmployees());
    }, []);
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
                        {employees.map((item) => {
                            return (
                                <tr>
                                    <td>{item.empId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.salary}</td>
                                    <td><Button variant="danger" className="btn-sm" onClick={() => {
                                        setEmployeeId(item._id); openModal()
                                    }
                                    }>Delete</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
            <Modal show={showDialog} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={deleteEmployee} className="btn-sm">
                        Yes, Delete
                    </Button>
                    <Button variant="danger" className="btn-sm" onClick={closeModal}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}