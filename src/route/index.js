import { useMemo, Suspense} from 'react';
import {Redirect, Router, Switch} from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout';
import routes from './routes';
import { ToastContainer } from "react-toastify";
import PrivateRoute from './private';
import PublicRoute from './public';
import Loader from '../component/Loader';

const Routes = (props) => {
const renderRoutes = useMemo(
    () =>
        routes.map((route, index) =>
        route.redirect ? (
            <Redirect
            key={index}
            from={route.path}
            to={route.redirect}
            {...route}
            />
        ) : route.auth ? (
            <PrivateRoute
            key={index}
            // isAuthenticated={props.isAuthenticated}
            {...route}
            />
        ) : (
            <PublicRoute 
            key={index} {...route} 
            // isAuthenticated={props.isAuthenticated}
            />
        )
        ), [props]
    );

    return(
		<Router>
			<Suspense fallback={<Loader /> }>
                <ToastContainer />
				<Switch>
                    <PublicRoute
                        layout={MainLayout}
                        path="/"
                        exact
                        // component={Home}
                    />
                    <PublicRoute
                        layout={MainLayout}
                        path="/index"
                        exact
                        // component={Home}
                    />
                    {renderRoutes}
                    </Switch>
			</Suspense>
		</Router>
    )
}

const mapStateToProps = (state) => {
    return {
        application: state.web.application,
        isAuthenticated: state.auth.isAuthenticated,
    };
};


export default mapStateToProps(Routes)
