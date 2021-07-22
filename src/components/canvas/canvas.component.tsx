import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_COORDINATE } from "../../redux/types/types";
import { v4 as uuidv4 } from "uuid";
import "./canvas.styles.scss";

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
				context.rect(layerX, layerY, 3, 3);
				context.fill();
				context.closePath();
				setCoordinate(layerX, layerY);
			}
		}
	};

	return (
		<div className="canvas-container">
			<canvas
				onMouseDown={e => draw(e)}
				onMouseUp={() => setDrawing(false)}
				ref={canvasRef}
				height={height}
				width={width}
			/>
		</div>
	);
};

Canvas.defaultProps = {
	width: "400px",
	height: "400px",
};

export default Canvas;
