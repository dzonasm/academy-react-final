import React from "react";
import { Container } from "react-bootstrap";
import LoginComponent from "../../components/login/login";
import "../../common/common-styles.styles.scss";

export default function LogInPage() {
	return (
		<Container className=" h-100 d-flex justify-content-center align-items-center">
			<LoginComponent />
		</Container>
	);
}
