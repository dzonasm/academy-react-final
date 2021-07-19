import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer/root-reducer";

export type ProtectedRouteProps = {
	authenticationPath: string;
} & RouteProps;

export const PrivateRoute = ({ authenticationPath, ...routeProps }: ProtectedRouteProps) => {
	const selectCurrentUser = (state: RootState) => state.user.currentUser;
	const currentUser = useSelector(selectCurrentUser);

	console.log(currentUser);

	return currentUser ? <Route {...routeProps} /> : <Redirect to={authenticationPath} />;
};
