import { Route, Redirect, useLocation } from "react-router-dom";
import { MainLayout } from '../layout/MainLayout';

const PrivateRoute = ({component: Component, role, isAuthenticated, layout: Layout = MainLayout, ...rest}) => {
    const location = useLocation();
	return isAuthenticated ? (
		<Route
			{...rest}
			render={(props) =>
					<>
                        <Layout>
                            <Component {...props} />
                        </Layout>
					</>
			}
		/>
	) : (
		<Redirect
			to={{
				pathname: "/login",
				state: { from: location },
			}}
		/>
	);
};

export default PrivateRoute