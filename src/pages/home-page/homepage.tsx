import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../common/common-styles.styles.scss";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActionTypes } from "../../redux/types/types";
import { RoutingConstants } from "../../common/routingContstants";

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
		<div className="h-100">
			<h1>Im the homepage</h1>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Profile</h2>
					<Link to="/update-profile">
						<Button>Update Profile</Button>
					</Link>
				</Card.Body>
			</Card>
			<Button variant="link" onClick={() => handleLogout()} className="w-100 text-center mt-2">
				Logout!
			</Button>
		</div>
	);
};
