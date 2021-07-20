import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./board.scss";

const Board = () => {
	const [board, setBoard] = useState(null);

	return (
		<>
			<div className="board-container max-w-450">
				<Card>
					<Card.Body className="d-flex flex-column">
						<label>perspective: 0px;</label>
						<input type="range" min="0" max="999" />

						<label>rotateX: 0deg; </label>
						<input type="range" min="-180" max="180" />

						<label>rotateY: 0deg; </label>
						<input type="range" min="-180" max="180" />

						<label>rotateZ: 0deg; </label>
						<input type="range" min="-180" max="180" />
					</Card.Body>
				</Card>
			</div>
		</>
	);
};

export default Board;

//https://simutis.dev/api/doc/#/
