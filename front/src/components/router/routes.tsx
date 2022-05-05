import Admin from "../pages/Admin";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
import { HOME_PATH, ADMIN_PATH, AUTH_PATH, BASKET_PATH, DEVICE_PATH } from "./paths";
import Basket from "../pages/basket/Basket";
import DevicePage from "../pages/DevicePage";


export const notAuthRouter = [
    {path: HOME_PATH, element: <Shop/> },
    {path: AUTH_PATH, element: <Auth/>},
    {path: DEVICE_PATH, element: <DevicePage/>}
];

export const adminRouter = [
        {path: HOME_PATH, element: <Shop/>},
        {path: ADMIN_PATH, element: <Admin/>},
        {path: BASKET_PATH, element: <Basket/>},
        {path: DEVICE_PATH, element: <DevicePage/>}
]