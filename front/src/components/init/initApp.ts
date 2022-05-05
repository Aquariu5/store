import user from "../../models/user";
import basket from "../../models/basket";
import jwt_decode from 'jwt-decode';
import { getBasketById } from "../../api/apiBasket";
export default async function init() {
    if (localStorage.getItem('token')) {
        user.setAuthTrue();
        const token = localStorage.getItem('token')
        const data: any = jwt_decode(token || '');
        user.id = data.id;
        user.email = data.email;
        user.role = data.role;
        const basketById = await getBasketById(user.id);
        basket.setDevices(basketById.rows);
    }
}

