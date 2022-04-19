import { useState } from "react";
import { Container, Row, Col, Navbar, Nav, Button, NavLink, Form, FormControl} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AUTH_PATH, BASKET_PATH } from "./router/paths";
const NavbarOwn = () => {

    const [state,setState] = useState('');
    const history = useHistory();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">AydarShop</Navbar.Brand>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="ml-auto">
                    <Button onClick={() => history.push(AUTH_PATH)}>Войти</Button>
                    <Button onClick={() => history.push(BASKET_PATH)}>Корзина</Button>

                    {/* <Link to={AUTH_PATH}>Войти</Link>
                    <Link to={BASKET_PATH}>Корзина</Link> */}
                </Nav>
            </Container>
        </Navbar>
            
    )

}

export default NavbarOwn