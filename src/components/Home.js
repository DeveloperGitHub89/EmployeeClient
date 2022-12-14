import { Alert, Container } from "react-bootstrap";

export function Home(){
    return (
        <>
            <Container className="mt-5 text-center">
                <Alert variant="primary">
                    Employee Management System
                </Alert>
            </Container>
            <Container className="text-center">
                <p>In this app you can manage all the employees. We can add, remove, fetch and update the employees</p>
            </Container>
        </>
    );
}