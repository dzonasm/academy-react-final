import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { RoutingConstants } from "../../common/routingContstants";
import { auth } from "../../firebase";
import { selectCurrentUser } from "../../redux/selectors/selectors";

// import "./header.styles.scss";

const Header = () => {
	const [error, setError] = useState("");
	const history = useHistory();
	const user = useSelector(selectCurrentUser);

	const logout = () => {
		return auth.signOut();
	};
	const handleLogout = async () => {
		try {
			await logout();
			history.push(RoutingConstants.LOGIN);
		} catch (e) {
			setError("Whoops, failed to log out");
		}
	};

	return (
		<Navbar>
			<Container>
				<Navbar.Brand>
					<Link className="nav-link" to={RoutingConstants.HOME}>
						Perspective
					</Link>
				</Navbar.Brand>
				{!user ? (
					<Nav className="me-auto">
						<Nav.Link>
							<Link className="nav-link" to={RoutingConstants.LOGIN}>
								Login
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link className="nav-link" to={RoutingConstants.SIGNUP}>
								SignUp
							</Link>
						</Nav.Link>
					</Nav>
				) : null}
				<Navbar.Toggle />
				{user ? (
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>Signed in as: {user.email}</Navbar.Text>
						<Button className="btn btn-primary ms-3" onClick={handleLogout}>
							Logout
						</Button>
					</Navbar.Collapse>
				) : null}
			</Container>
		</Navbar>
	);
};

export default Header;
