import axios from "axios"



export const getBrands = async () => {
    const res = (await axios.get(`${process.env.REACT_APP_BACK_SITE}/api/brand`)).data;
    return res;
}

export const getTypes = async () => {
    const res = (await axios.get(`${process.env.REACT_APP_BACK_SITE}/api/type`)).data;
    return res;
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