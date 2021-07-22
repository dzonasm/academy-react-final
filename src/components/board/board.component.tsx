import React, { useEffect, useState, useMemo } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCoordinates } from "../../redux/selectors/selectors";
import "./board.scss";
import { createCoordinatesForSvgs, coordinatesForSvg } from "./svg/createSvgs";
import SvgComponent from "./svg/svg.component";

const Board = () => {
	const [board, setBoard] = useState(null);
	const coordinates = useSelector(selectCoordinates);
	const createdCoords = useMemo(() => createCoordinatesForSvgs(coordinates), [coordinates]);
	const content = createdCoords.map(entry => {
		const { id, xStart, xEnd, yStart, yEnd } = entry;
		return (
			<SvgComponent key={id} xEnd={xEnd} xStart={xStart} yStart={yStart} yEnd={yEnd} color="red"></SvgComponent>
		);
	});

	console.log(content);
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

				<div className="board">
					<div className="perspective">{content}</div>
				</div>
			</div>
		</>
	);
};

export default Board;

//https://simutis.dev/api/doc/#/
