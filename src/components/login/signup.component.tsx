import React, { FormEventHandler, useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActionTypes } from "../../redux/types/types";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signup.styles.scss";
import { auth } from "../../firebase";

export default function SignUpComponent() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();

	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordConfirmRef = useRef<HTMLInputElement>(null);

	const signup = (email: string, password: string) => {
		return auth.createUserWithEmailAndPassword(email, password);
	};

	const handleFormSubmit = async (e: React.FormEvent): Promise<any> => {
		e.preventDefault();
		if (passwordConfirmRef?.current?.value !== passwordRef.current?.value) {
			return setError("Passwords don't match");
		}

		try {
			setError("");
			setLoading(true);
			//@ts-ignore values are required
			await signup(emailRef.current?.value, passwordRef.current?.value);
		} catch (e) {
			console.log(e);
			setError("Whoops, something went wrong");
		}

		setLoading(false);
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user =>
			dispatch({ type: userActionTypes.SET_USER, payload: user }),
		);

		return unsubscribe;
	}, []);

	return (
		<div className="w-100 max-w-400">
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Sign Up</h2>
					{error && <Alert>{error}</Alert>}
					<Form onSubmit={e => handleFormSubmit(e)}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control required type="email" ref={emailRef}></Form.Control>
						</Form.Group>
						<Form.Group id="email">
							<Form.Label>Password</Form.Label>
							<Form.Control required type="password" ref={passwordRef}></Form.Control>
						</Form.Group>
						<Form.Group id="password-confirm">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control required type="password" ref={passwordConfirmRef}></Form.Control>
						</Form.Group>
						<Button disabled={loading} className="w-100 mt-4" type="submit">
							Sign Up!
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Already have an account? <Link to="/login">Login!</Link>
			</div>
		</div>
	);
}