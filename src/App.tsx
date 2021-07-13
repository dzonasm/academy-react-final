import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import { Homepage } from "./pages/homepage";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
			</Switch>
		</div>
	);
}

export default App;
