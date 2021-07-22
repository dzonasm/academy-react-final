import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/selectors";

export type ProtectedRouteProps = {
	authenticationPath: string;
} & RouteProps;

export const PrivateRoute = ({ authenticationPath, ...routeProps }: ProtectedRouteProps) => {
	const currentUser = useSelector(selectCurrentUser);

	return currentUser?.email ? <Route {...routeProps} /> : <Redirect to={authenticationPath} />;
};
