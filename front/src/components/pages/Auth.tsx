import { useState, useCallback } from "react";
import { Container, Card, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { registration, auth, getUserId } from "../../api/apiUser";
import useInput from "../../hooks/useInput";
import user from "../../models/user";
import { observer } from "mobx-react-lite";
import { HOME_PATH } from "../router/paths";

import init from "../init/initApp";


import basket from '../../models/basket';
import jwt_decode from 'jwt-decode';
import { getBasketById } from '../../api/apiBasket';


const Auth = observer(() => {

    const [state,setState] = useState('');
    const email = useInput('');
    const password = useInput('');
    const history = useNavigate();
    const [header, setHeader] = useState<string[]>(['Регистрация', 'Уже зарегистрированы?']);
    
    const signIn = useCallback(async () => {
        try {
            let res;
            if (header[0] == 'Регистрация') 
                res = await registration(email.value, password.value);
            else
                res = await auth(email.value, password.value);

            console.log('res', res.data.token);
            user.changeAuth();
            localStorage.setItem('token', res.data.token);
            init();
            history(HOME_PATH);
        }
        catch(e: any) {
            if (e.response && e.response.data && e.response.data.message)
                alert(e.response.data.message); // todo  красное подчеркивание снизу
            
            console.log('e', e);
        }
    },[email, password]);

    const changeHeader = () => {
        if (header[0] == 'Регистрация') {
            setHeader(['Авторизация', 'Нет логина? Зарегистрироваться'])
        }
        else {
            setHeader(['Регистрация', 'Уже зарегистрированы?']);
        }
    }


    return (
        <Container className="d-flex justify-content-center align-items-center"  style={{
            height: window.innerHeight - 100
            }}>
                <Card style={{width: 600}} className={'p-5'}>
                    <h3 className={'m-auto p-4'}>{header[0]} </h3>
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
                                <NavLink onClick={changeHeader} className="ml-4" to='/auth'>{header[1]}</NavLink>
                                <Button onClick={signIn} className="mb-3 me-2">Войти</Button>
                        </div>
                    </Form>
                </Card>
                
                
        </Container>
    )
});

export default Auth;