import React from "react";
import { Container } from "react-bootstrap";
import SignUpComponent from "../../components/signup/signup.component";
import "../../common/common-styles.styles.scss";

export default function SignUpPage() {
	return (
		<Container className="d-flex h-100 justify-content-center align-items-center">
			<SignUpComponent />
		</Container>
	);
}
