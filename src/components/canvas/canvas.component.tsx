import React, { useRef, useEffect } from "react";

export default function Canvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const contextRef = useRef<CanvasRenderingContext2D | null>(null);
	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			canvas.width = window.innerWidth * 2;
			canvas.height = window.innerHeight * 2;
			canvas.style.width = `${window.innerWidth}px`;
			canvas.style.height = `${window.innerHeight}px`;

			const context = canvas.getContext("2d");
			context?.scale(2, 2);
			//@ts-ignore
			context?.lineCap = "round";
			//@ts-ignore
			context?.strokeStyle = "black";
			//@ts-ignore
			context?.lineWidth = 5;
			contextRef.current = context;
		}
	}, []);

	const placeDot = ({ nativeEvent }: React.MouseEvent<HTMLElement>) => {
		console.log(nativeEvent);
		const {} = nativeEvent;
		contextRef.current?.fillRect;
	};

	return <canvas ref="canvas"></canvas>;
}
