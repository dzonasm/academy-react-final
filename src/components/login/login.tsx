import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActionTypes } from "../../redux/types/types";
import { Spinner, Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { RoutingConstants } from "../../common/routingContstants";

export default function LoginComponent() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const history = useHistory();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const login = (email: string, password: string) => {
		return auth.signInWithEmailAndPassword(email, password);
	};

	const handleFormSubmit = async (e: React.FormEvent): Promise<any> => {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			//@ts-ignore values are required
			await login(emailRef.current?.value, passwordRef.current?.value);
			setLoading(false);
			history.push(RoutingConstants.HOME);
		} catch (e) {
			console.log(e);
			setError("Whoops, something went wrong");
		}
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			console.log("effect from login");
			dispatch({ type: userActionTypes.SET_USER, payload: user });
		});

		return unsubscribe;
	}, []);

	return (
		<div className="w-100 max-w-400">
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Log In</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={e => handleFormSubmit(e)}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control required type="email" ref={emailRef}></Form.Control>
						</Form.Group>
						<Form.Group id="email">
							<Form.Label>Password</Form.Label>
							<Form.Control required type="password" ref={passwordRef}></Form.Control>
						</Form.Group>
						<Button disabled={loading} className="w-100 mt-4" type="submit">
							{loading ? <Spinner animation="grow" /> : "Log In!"}
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				New user? <Link to="/signup">Signup!</Link>
			</div>
		</div>
	);
}
