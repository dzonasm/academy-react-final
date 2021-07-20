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

export const Homepage = () => {
	const [error, setError] = useState("");
	const logout = () => {
		return auth.signOut();
	};
	const history = useHistory();
	const dispatch = useDispatch();
	const handleLogout = async () => {
		try {
			await logout();
			history.push(RoutingConstants.LOGIN);
		} catch (e) {
			console.log(e);
			setError("Whoops, failed to log out");
		}
	};

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
			<div className="row justify-content-center">
				<Card className="max-w-450">
					<Card.Body className="d-flex flex-column">
						<h2 className="text-center mb-4">Profile</h2>
						<Link to="/update-profile">
							<Button>Update Profile</Button>
						</Link>
						<div>
							<Button onClick={() => handleLogout()} className="mt-2">
								Logout!
							</Button>
						</div>
					</Card.Body>
				</Card>
			</div>
			<div className="row justify-content-center">
				<Board></Board>
			</div>
		</div>
	);
};
