import { Component } from "react";
import { Alert, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { saveEmployee } from "../services/EmployeeService";

export class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            formData: {},
            isModalOpened: false
        }
    }
    closeModal=()=>{
        this.setState({isModalOpened: false});
    }
    openModal=()=>{
        this.setState({isModalOpened: true});
    }
    handleChange = (event) => {
        this.setState(
            {
                formData: {
                    ...this.state.formData,
                    [event.target.name]: event.target.value
                }
            }
        )
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state.formData);
        const response = await saveEmployee(this.state.formData)
        console.log(response.data);
        if (response.status == 201) {
            this.openModal();
        }
    }
    render() {
        return (
            <>
                <Container className="mt-4 text-center">
                    <Alert variant="success">
                        Register new employee
                    </Alert>
                </Container>
                <Container className="mt-4">
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Employee Id</Form.Label>
                                    <Form.Control type="text" placeholder="Employee Id" name='empId' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter phone" name="phone" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control type="text" placeholder="Enter salary" name="salary" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <input type={'submit'} value='Register' className="btn btn-primary"></input>
                    </Form>
                </Container>
                <Modal show={this.state.isModalOpened} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, EMployee registered!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.closeModal}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}