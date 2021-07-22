import "./svg.styles.scss";

interface SvgProps {
	xStart: string;
	yStart: string;
	xEnd: string;
	yEnd: string;
	color: string;
}

export default function SvgComponent({ xStart, yStart, xEnd, yEnd, color }: SvgProps) {
	return (
		<svg className="svg" height="400px" width="400px">
			<line x1={xStart} y1={yStart} x2={xEnd} y2={yEnd} style={{ stroke: color, strokeWidth: "4" }} />
		</svg>
	);
}
