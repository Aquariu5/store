import axios from "axios";
import { host } from "./apiUser";
export const getTypes = async () => {
    const res = (await axios.get(`${process.env.REACT_APP_BACK_SITE}/api/type`)).data;
    return res;
}

export const addType = async (name: string) => {
    const res = (await host.post(`/api/type`, {name})).data;
    return res;
}