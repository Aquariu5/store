import { useState } from "react";
import { Navbar, Container, Form, Button, Nav, Badge } from "react-bootstrap";
const Footer = () => {

    const [state,setState] = useState('');
    return  <Navbar expanded={false} bg="dark" variant="dark" className="mt-4">
                <Container>
                    <Navbar.Brand className="me-auto">
                        Aquarius 2022. All Rights reserved.
                    </Navbar.Brand>
                </Container>
            </Navbar>   
    }

export default Footer