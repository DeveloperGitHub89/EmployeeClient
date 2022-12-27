import { Form, Formik, Field, ErrorMessage } from "formik";
import { Alert, Button, Col, Container, Modal, Row } from "react-bootstrap";
import { registrationSchema } from "../validation-schemas/RegistrationSchema";
import '../assets/styles/CommonStyle.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerEmployee } from "../actions/EmployeeActions";

export function EmployeeRegistrationForm()  {
    const [isModalOpened,setIsModalOpened]=useState(false)
    const dispatch=useDispatch()
    const closeModal = () => {
        setIsModalOpened(false)
    }
    const openModal = () => {
        setIsModalOpened(true)
    }

    const handleSubmit = (values) => {
        console.log(values);
        dispatch(registerEmployee(values))
        .then(()=>{
            openModal();
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const initialValues = {
        empId: '', name: '', phone: '', salary: ''
    };
    
        return (
            <>
                <Container className="mt-4 text-center">
                    <Alert variant="success">
                        Register new employee
                    </Alert>
                </Container>
                <Container className="mt-4">
                    <Formik initialValues={initialValues}
                        validationSchema={registrationSchema}
                        onSubmit={handleSubmit} >
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
                <Modal show={isModalOpened} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, EMployee registered!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={closeModal}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    
}