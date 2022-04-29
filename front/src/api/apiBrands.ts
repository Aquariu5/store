import axios from "axios";
import { host } from "./apiUser";

export const getBrands = async () => {
    const res = (await axios.get(`${process.env.REACT_APP_BACK_SITE}/api/brand`)).data;
    return res;
}

export const addBrand = async (name: string) => {
    const res = (await host.post('/api/brand', {name})).data;
    return res;
}
