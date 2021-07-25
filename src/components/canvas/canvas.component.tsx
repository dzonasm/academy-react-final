import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COORDINATE, coordinateArray, coordinateDot, REMOVE_COORDINATE } from "../../redux/types/types";
import { v4 as uuidv4 } from "uuid";
import "./canvas.styles.scss";
import { selectCoordinates } from "../../redux/selectors/selectors";
import { Button } from "react-bootstrap";
interface CanvasProps {
	width: number;
	height: number;
}

const Canvas = ({ width, height }: CanvasProps) => {
	const [_drawing, setDrawing] = useState(false);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const dispatch = useDispatch();

	const setCoordinate = (x: number, y: number) => {
		dispatch({ type: ADD_COORDINATE, payload: { id: uuidv4(), coordx: x, coordy: y } });
	};

	const deleteCoordinate = (id: string) => {
		dispatch({ type: REMOVE_COORDINATE, payload: { id } });
	};

	const coordinatesState = useSelector(selectCoordinates) as coordinateArray;
	const { coordinates } = coordinatesState;

	const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
		setDrawing(true);
		const {
			//@ts-ignore yes, typescript, they do exist here
			nativeEvent: { layerX, layerY },
		} = e;
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const context = canvas.getContext("2d");
			if (context) {
				context.beginPath();
				context.rect(layerX, layerY, 3, 3);
				context.fill();
				context.closePath();
				setCoordinate(layerX, layerY);
			}
		}
	};

	const deleteCanvasDot = (x: number, y: number, id: string) => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const context = canvas.getContext("2d");
			if (context) {
				context.clearRect(x, y, 3, 3);
			}
		}
		deleteCoordinate(id);
	};

	const deleteButtons = coordinates.map(({ coordx, coordy, id }) => (
		<Button key={uuidv4()} onClick={() => deleteCanvasDot(coordx, coordy, id)} className="btn btn-warning">
			Delete coordinate {`x: ${coordx}, y: ${coordy}`}
		</Button>
	));

	return (
		<div className="d-flex flex-column justify-content-start align-items-center p-2">
			<div className="canvas-container p-2">
				<canvas
					onMouseDown={e => draw(e)}
					onMouseUp={() => setDrawing(false)}
					ref={canvasRef}
					height={height}
					width={width}
				/>
			</div>
			<div className="d-flex flex-column justify-content-center align-items-center">
				{coordinates ? deleteButtons : null}
			</div>
		</div>
	);
};

Canvas.defaultProps = {
	width: "400px",
	height: "400px",
};

export default Canvas;
