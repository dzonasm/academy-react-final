import React, { useEffect, useState, useMemo, useRef } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCoordinates } from "../../redux/selectors/selectors";
import "./board.scss";
import { createCoordinatesForSvgs } from "./svg/createSvgs";
import SvgComponent from "./svg/svg.component";

const Board = () => {
	const [threeDee, setThreeDee] = useState({
		perspective: "0",
		rotateX: "0",
		rotateY: "0",
		rotateZ: "0",
	});
	const { perspective, rotateX, rotateY, rotateZ } = threeDee;

	let styles = {
		transform: `perspective(${perspective}px)
			 rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
	};

	const coordinates = useSelector(selectCoordinates);
	const createdCoords = useMemo(() => createCoordinatesForSvgs(coordinates), [coordinates]);
	const content = createdCoords.map(entry => {
		const { id, xStart, xEnd, yStart, yEnd } = entry;
		return (
			<SvgComponent key={id} xEnd={xEnd} xStart={xStart} yStart={yStart} yEnd={yEnd} color="red"></SvgComponent>
		);
	});

	const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
		setThreeDee({ ...threeDee, [key]: e.target.value });
	};

	return (
		<>
			<div className="board-container max-w-450">
				<Card>
					<Card.Body className="d-flex flex-column">
						<label>perspective: {perspective}px;</label>
						<input onChange={e => handleSliderChange(e, "perspective")} type="range" min="0" max="999" />

						<label>rotateX: {rotateX}deg; </label>
						<input onChange={e => handleSliderChange(e, "rotateX")} type="range" min="-180" max="180" />

						<label>rotateY: {rotateY}deg; </label>
						<input onChange={e => handleSliderChange(e, "rotateY")} type="range" min="-180" max="180" />

						<label>rotateZ: {rotateZ}deg; </label>
						<input onChange={e => handleSliderChange(e, "rotateZ")} type="range" min="-180" max="180" />
					</Card.Body>
				</Card>

				<div className="board">
					<div className="perspective" style={styles}>
						{content}
					</div>
				</div>
			</div>
		</>
	);
};

export default Board;

//https://simutis.dev/api/doc/#/
