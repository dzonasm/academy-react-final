import React, { useState, useEffect } from "react";

import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../common/common-styles.styles.scss";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActionTypes } from "../../redux/types/types";
import { RoutingConstants } from "../../common/routingContstants";
import "../../common/common-styles.styles.scss";
import Board from "../../components/board/board.component";
import Canvas from "../../components/canvas/canvas.component";

export const Homepage = () => {
	const [error, setError] = useState("");
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user =>
			dispatch({ type: userActionTypes.SET_USER, payload: user }),
		);

		return unsubscribe;
	}, []);

	return (
		<div className=" h-100 container">
			<div className="row">
				<h1>Drawing perspective</h1>
			</div>
			<div className=" d-flex justify-content-center">
				<Canvas></Canvas>
				<Board></Board>
			</div>
		</div>
	);
};
