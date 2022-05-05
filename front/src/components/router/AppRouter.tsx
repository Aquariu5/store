import {Routes, Route, Navigate } from 'react-router-dom';
import {HOME_PATH} from "./paths";
import { notAuthRouter, adminRouter } from "./routes";
import user from "../../models/user";
import { observer } from "mobx-react-lite";
const AppRouter = observer(() => {

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