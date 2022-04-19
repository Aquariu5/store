import Admin from "../Admin";
import Shop from "../Shop";
import Auth from "../Auth";
import { HOME_PATH, ADMIN_PATH, AUTH_PATH, BASKET_PATH, DEVICE_PATH } from "./paths";
import Basket from "../Basket";
import DevicePage from "../DevicePage";
import React, { ReactNode, RefCallback } from "react";

interface IRouter {
    path: string,
    component: ReactNode | React.Component
}
export const publicRouter = [
    {path: HOME_PATH, component: Shop},
    {path: AUTH_PATH, component: Auth},
    {path: DEVICE_PATH, component: DevicePage}
]

export const adminRouter = [
    {path: HOME_PATH, component: Shop},
    {path: ADMIN_PATH, component: Admin},
    {path: AUTH_PATH, component: Auth},
    {path: BASKET_PATH, component: Basket},
    {path: DEVICE_PATH, component: DevicePage}
]