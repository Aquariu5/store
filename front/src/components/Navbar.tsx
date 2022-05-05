import { Container, Navbar, Nav, Button, Form, FormControl, Badge} from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import { AUTH_PATH, BASKET_PATH, HOME_PATH } from "./router/paths";
import user from "../models/user";
import basket from "../models/basket";
import { observer } from "mobx-react-lite";
import clear from "./init/clearApp";
const NavbarOwn = observer(() => {

    const history = useNavigate();
    console.log('basketDevicesnav', basket.devices.length);
    const logOut = () => {
        user.setAuthFalse();
        clear();
        history(AUTH_PATH);
    }

    const logIn = () => {
        history(AUTH_PATH);
        // user.setAuthTrue();
        // init();
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => history(HOME_PATH)}>AydarShop</Navbar.Brand>
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
                    {
                        user.auth ?
                        <Button onClick={logOut}>Выйти</Button>
                        :
                        <Button onClick={logIn}>Войти</Button>
                    }
                    
                    <Button onClick={() => history(BASKET_PATH)}>Корзина <Badge bg="secondary">{basket.devices.length}</Badge></Button>

                    {/* <Link to={AUTH_PATH}>Войти</Link>
                    <Link to={BASKET_PATH}>Корзина</Link> */}
                </Nav>
            </Container>
        </Navbar>
            
    )

});

export default NavbarOwn