import { useState } from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import { HOME_PATH } from "./paths";
import { publicRouter, adminRouter } from "./routes";
const AppRouter = () => {

    const [state,setState] = useState('');
    return (
            <Switch>
                {
                    adminRouter.map(route => <Route key={route.path} path={route.path} component={route.component} exact/>)
                }
                <Redirect to={HOME_PATH}/>
            </Switch>
    )
}

export default AppRouter;