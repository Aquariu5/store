import { useState } from "react";
import {Routes, Route, Navigate } from 'react-router-dom';
import { AUTH_PATH, HOME_PATH, ADMIN_PATH, BASKET_PATH, DEVICE_PATH } from "./paths";
import { notAuthRouter, adminRouter } from "./routes";
import Auth from "../Auth";
import Shop from "../Shop";
import Admin from "../Admin";
import Basket from "../Basket";
import DevicePage from "../DevicePage"
import user from "../../models/user";
import { observer } from "mobx-react-lite";
const AppRouter = observer(() => {

    const [state,setState] = useState('');
    return (
            <Routes>
                
                {
                    user.auth ?
                        adminRouter.map(route => <Route key={route.path} path={route.path} element={route.element}></Route>)
                    :
                        notAuthRouter.map(route => <Route key={route.path} path={route.path} element={route.element}></Route>)
                }
                <Route path='*' element={<Navigate to={HOME_PATH} replace />}/> {/*redirect in react-router-dom*/}
            </Routes>
    )
})

export default AppRouter;