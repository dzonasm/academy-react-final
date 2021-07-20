import React, { useEffect, useState } from "react";
import "./board.scss";

const Board = () => {
	const [board, setBoard] = useState(null);

	return (
		<>
			<div className="board-container">
				<div className="board"></div>
			</div>
		</>
	);
};

export default Board;

//https://simutis.dev/api/doc/#/
