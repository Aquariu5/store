import user from "../../models/user";
import basket from "../../models/basket";
export default function clear() {
    user.clearFields();
    basket.clearFields();
    localStorage.removeItem('token');
}