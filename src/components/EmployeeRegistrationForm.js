import { Form, Formik, Field, ErrorMessage } from "formik";
import { Component } from "react";
import { Alert, Button, Col, Container, Modal, Row } from "react-bootstrap";
import { saveEmployee } from "../services/EmployeeService";
import { registrationSchema } from "../validation-schemas/RegistrationSchema";
import '../assets/styles/CommonStyle.css';

export class EmployeeRegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            isModalOpened: false
        }
    }
    closeModal = () => {
        this.setState({ isModalOpened: false });
    }
    openModal = () => {
        this.setState({ isModalOpened: true });
    }

    handleSubmit = (values) => {
        console.log(values);
    }
    initialValues = {
        empId: '', name: '', phone: '', salary: ''
    };
    render() {
        return (
            <>
                <Container className="mt-4 text-center">
                    <Alert variant="success">
                        Register new employee
                    </Alert>
                </Container>
                <Container className="mt-4">
                    <Formik initialValues={this.initialValues}
                        validationSchema={registrationSchema}
                        onSubmit={this.handleSubmit} >
                        {
                            (formik) => {
                                const { errors, touched, isValid, dirty } = formik;
                                return (
                                    <Form>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="empId" className="form-label">Employee Id</label>
                                                    <Field type='text' name='empId' id='empId' placeholder='Enter id' className={errors.empId && touched.empId ?
                                                        "input-error form-control" : 'form-control'}></Field>
                                                    <ErrorMessage name="empId" component='span' className="error"></ErrorMessage>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">Name</label>
                                                    <Field type='text' name='name' id='name' placeholder='Enter name' className={errors.name && touched.name ?
                                                        "input-error form-control" : 'form-control'}></Field>
                                                    <ErrorMessage name="name" component='span' className="error"></ErrorMessage>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="salary" className="form-label">Salary</label>
                                                    <Field type='text' name='salary' id='salary' placeholder='Enter Salary' className={errors.salary && touched.salary ?
                                                        "input-error form-control" : 'form-control'}></Field>
                                                    <ErrorMessage name="salary" component='span' className="error"></ErrorMessage>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="phone" className="form-label">Phone</label>
                                                    <Field type='text' name='phone' id='phone' placeholder='Enter phone' className={errors.phone && touched.phone ?
                                                        "input-error form-control" : 'form-control'}></Field>
                                                    <ErrorMessage name="phone" component='span' className="error"></ErrorMessage>
                                                </div>
                                            </Col>
                                        </Row>
                                        <button
                                            type="submit"
                                            className={!(dirty && isValid) ? "disabled-btn btn btn-success" : "btn btn-success"}
                                            disabled={!(dirty && isValid)}
                                        >
                                            Register Employee
                                        </button>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
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