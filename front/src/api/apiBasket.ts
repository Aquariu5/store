import axios from "axios";

export const getBasketById = async (id: number) => {
    const res = (await axios.get(`${process.env.REACT_APP_BACK_SITE}/api/basket`, {params: {id}})).data;
    return res;
}

export const addInBasket = async(basketId: number, deviceId: number, amount: number = 1) => {
    const res = (await axios.post(`${process.env.REACT_APP_BACK_SITE}/api/basket`, {basketId, deviceId, amount})).data;
    return res;
}