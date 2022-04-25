import { makeAutoObservable } from "mobx";
import {IUser} from '../interfaces/user'

class User implements IUser {
    email: string;
    password: string;
    role: string;
    auth: boolean;
    id: number
    constructor() {
        makeAutoObservable(this);
        this.email = '';
        this.password = '';
        this.role = '';
        this.auth = false;
        this.id = -1;
    }

    setAuthTrue() {
        this.auth = true;
    }

    setAuthFalse() {
        this.auth = false;
    }

    setId(val: number) {
        this.id = val;
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

    clearFields() {
        this.email = '';
        this.password = '';
        this.role = '';
        this.auth = false;
        this.id = -1;
    }
}

export default new User();