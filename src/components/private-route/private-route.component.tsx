import { Route, Redirect, RouteProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer/root-reducer";
import { useEffect } from "react";
import { auth } from "../../firebase";
import { userActionTypes } from "../../redux/types/types";

export type ProtectedRouteProps = {
	authenticationPath: string;
} & RouteProps;

export const PrivateRoute = ({ authenticationPath, ...routeProps }: ProtectedRouteProps) => {
	const selectCurrentUser = (state: RootState) => state.user.currentUser;
	const currentUser = useSelector(selectCurrentUser);

	console.log(currentUser);

	return currentUser?.email ? <Route {...routeProps} /> : <Redirect to={authenticationPath} />;
};
