import { useState, useCallback } from "react";
import { Container, Card,Form, FormControl, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { registration, auth } from "../../api/apiUser";
import user from "../../models/user";
import { observer } from "mobx-react-lite";
import { HOME_PATH } from "../router/paths";
import { useForm } from "react-hook-form";
import init from "../init/initApp";
import { IForm } from "../../interfaces/auth";

const Auth = observer(() => {

    // const email = useInput('');
    // const password = useInput('');
    const history = useNavigate();
    const {register, handleSubmit, getValues, formState: {errors}} = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const [header, setHeader] = useState<string[]>(['Регистрация', 'Уже зарегистрированы?']);
    
    const signIn = useCallback(async (data: IForm) => {
        try {
            let res;
            if (header[0] === 'Регистрация') 
                res = await registration(data.email, data.password);
            else
                res = await auth(data.email, data.password);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[header, getValues('email'), getValues('password')]);

    const changeHeader = useCallback(() => {
        if (header[0] === 'Регистрация') {
            setHeader(['Авторизация', 'Нет логина? Зарегистрироваться'])
        }
        else {
            setHeader(['Регистрация', 'Уже зарегистрированы?']);
        }
    },[header]);

    const onSubmit = useCallback((data: IForm) => {
        console.log('data', data);
        signIn(data);
    },[signIn]);

    return (
        <Container className="d-flex justify-content-center align-items-center AutoHeight">
                <Card style={{width: 600}} className={'p-5'}>
                    <h3 className={'m-auto p-4'}>{header[0]} </h3>
                    <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                        <FormControl
                            placeholder="Логин..."
                            type="email"
                            {...register("email", {required: true, minLength: 3})}
                        />
                        {errors.email && <span>Заполните поле...</span>}
                        <FormControl
                            placeholder="Пароль..."
                            type="password"
                            {...register("password", {required: true, minLength: 3})}
                        />
                        {errors.password && <span>Заполните поле...</span>}
                        <div className="d-flex justify-content-between mt-3">
                                <NavLink onClick={changeHeader} className="ml-4" to='/auth'>{header[1]}</NavLink>
                                <Button type="submit" className="mb-3 me-2">Войти</Button>
                        </div>
                    </Form>
                </Card>
                
                
        </Container>
    )
});

export default Auth;