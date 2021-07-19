import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import SignUpPage from "./pages/signup-page/signup-page";
import LogInPage from "./pages/login-page/logInPage";
import { Homepage } from "./pages/home-page/homepage";
import { PrivateRoute } from "./components/private-route/private-route.component";
import { RoutingConstants } from "./common/routingContstants";

function App() {
	return (
		<div className="App">
			<Switch>
				<PrivateRoute path="/home" authenticationPath={RoutingConstants.LOGIN} component={Homepage} />
				<Route path="/signup" component={SignUpPage} />
				<Route path="/login" component={LogInPage} />
			</Switch>
		</div>
	);
}

export default App;
