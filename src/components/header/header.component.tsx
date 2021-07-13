import React from "react";
import { Link } from "react-router-dom";

// import "./header.styles.scss";

const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<h2 className="header-title"> Garaged </h2>
			</Link>
			<div className="links">
				<Link to="/">
					<p className="header-link">Skelbimai</p>
				</Link>
				<Link to="/ikelti">
					<p className="header-link">Įkelti</p>
				</Link>
				<Link to="/cart">
					<p className="header-link">Krepšelis</p>
				</Link>
			</div>
		</div>
	);
};

export default Header;
