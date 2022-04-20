import { makeAutoObservable } from "mobx";
interface IUser {
    email: string
    password: string
    role: string
    auth: boolean
}

class User implements IUser {
    email: string;
    password: string;
    role: string;
    auth: boolean;
    constructor() {
        makeAutoObservable(this);
        this.email = '';
        this.password = '';
        this.role = '';
        this.auth = false;
    }

    setAuthTrue() {
        this.auth = true;
    }

    setAuthFalse() {
        this.auth = false;
    }

    changeAuth() {
        this.auth = !this.auth;
    }
    setEmail(val: string) {
        this.email = val;
    }
    
    setPassword(val: string) {
        this.password = val;
    }

    setRole(val: string) {
        this.role = val;
    }
}

export default new User();