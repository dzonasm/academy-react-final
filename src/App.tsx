import React, { useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route, Redirect } from "react-router-dom";

import SignUpPage from "./pages/signup-page/signup-page";
import LogInPage from "./pages/login-page/logInPage";
import { Homepage } from "./pages/home-page/homepage";
import { PrivateRoute } from "./components/private-route/private-route.component";
import { RoutingConstants } from "./common/routingContstants";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { userActionTypes } from "./redux/types/types";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			dispatch({ type: userActionTypes.SET_USER, payload: user });
		});

		return unsubscribe;
	}, []);

	return (
		<div className="App">
			<Switch>
				<PrivateRoute exact path="/" authenticationPath={RoutingConstants.LOGIN} component={Homepage} />
				<Route path="/signup" component={SignUpPage} />
				<Route path="/login" component={LogInPage} />
			</Switch>
		</div>
	);
}

export default App;
