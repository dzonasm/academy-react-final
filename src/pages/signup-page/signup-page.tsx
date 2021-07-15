import React from "react";
import { Container } from "react-bootstrap";
import SignUpComponent from "../../components/login/signup.component";

export default function SignUpPage() {
	return (
		<Container className="d-flex justify-content-center align-items-center">
			<SignUpComponent />
		</Container>
	);
}
