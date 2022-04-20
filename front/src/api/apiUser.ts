import axios from "axios";


const host = axios.create({
    baseURL: process.env.REACT_APP_BACK_SITE
});

const authHost = axios.create({
    baseURL: process.env.REACT_APP_BACK_SITE
});


const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
}

authHost.interceptors.request.use(authInterceptor);

const registration = async (email: string, password: string) => {

    const response =  await host.post('/api/user/registration', {email, password});
    return response;
}

const auth = async (email: string, password: string) => {
    console.log('email, pass', email, password);
    const response = await host.post('/api/user/login', {email, password});
    console.log('response', response);
    return response;
}
export {
    host,
    registration,
    auth
}