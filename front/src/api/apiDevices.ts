import axios from "axios"
import { getTypes } from "./apiTypes";
import { getBrands } from "./apiBrands";
import { IDeviceAdd } from "../interfaces/device";
import { host } from "./apiUser";
import e from "express";



export const addDevice = async (data: IDeviceAdd) => {

    let formdata = new FormData();

    // const body = {
    //     price: data.price,
    //     name: data.name,
    //     brandId: data.brand.id,
    //     typeId: data.type.id,
    //     img: data.img,
    //     chars: data.chars
    // }
    formdata.append('price', data.price.toString());
    formdata.append('name', data.name.toString());
    formdata.append('brandId',  data.brand.id.toString());
    formdata.append('typeId',  data.type.id.toString());
    formdata.append('img',  data.img, 'file.png');
    formdata.append('chars',  JSON.stringify(data.chars));
    try {
        const res = (await host.post('/api/device', formdata)).data;
        return res;
    } catch(e: any) {
        console.log('errroradd', e.message);
    }

}
export const getDevices = async (/*brand?: string, type?: string*/brandId?: number | null, typeId?: number | null) => {
    if (brandId) {
        const brands = await getBrands();
        console.log('brands', brands);
    }
    if (typeId) {
        const types = await getTypes();
        console.log('types', types);
    }
    const res = (await axios.get(`${process.env.REACT_APP_BACK_SITE}/api/device`, {params: {brandId, typeId}})).data;
    return res;
}

export const getDeviceById = async(id: number) => {
    console.log('path', `${process.env.REACT_APP_BACK_SITE}/api/device/${id}`);
    const res = (await axios.get(`${process.env.REACT_APP_BACK_SITE}/api/device/${id}`)).data;
    return res;
}