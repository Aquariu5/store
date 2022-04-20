import { useState } from "react";
import { Container, Card, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { registration, auth } from "../api/apiUser";
import useInput from "../hooks/useInput";
import user from "../models/user";
import { observer } from "mobx-react-lite";
import { HOME_PATH } from "./router/paths";
const Auth = observer(() => {

    const [state,setState] = useState('');
    const email = useInput('');
    const password = useInput('');
    const history = useNavigate();
    const signIn = async () => {
        try {
            const res = await registration(email.value, password.value);
            console.log('res', res.data.token);
            user.changeAuth();
            localStorage.setItem('token', res.data.token);
            history(HOME_PATH);
        }
        catch(e: any) {
            if (e.response && e.response.data && e.response.data.message)
                alert(e.response.data.message); // todo  красное подчеркивание снизу
            
            console.log('e', e);
        }
    }
    return (
        <Container className="d-flex justify-content-center align-items-center"  style={{
            height: window.innerHeight - 100
            }}>
                <Card style={{width: 600}} className={'p-5'}>
                    <h3 className={'m-auto p-4'}>Регистрация </h3>
                    <Form className="d-flex flex-column">
                        <FormControl
                            placeholder="Логин..."
                            type="email"
                            {...email}
                        />
                        <FormControl
                            placeholder="Пароль..."
                            type="password"
                            {...password}
                        />
                        <div className="d-flex justify-content-between mt-3">
                                <NavLink className="ml-4" to='/auth'>Уже зарегистрированы?</NavLink>
                                <Button onClick={signIn} className="mb-3 me-2">Войти</Button>
                        </div>
                    </Form>
                </Card>
                
                
        </Container>
    )
});

export default Auth;