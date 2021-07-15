import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import SignUpPage from "./pages/signup-page/signup-page";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={SignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
