import { coordinateArray } from "../../../redux/types/types";

export interface coordinatesForSvg {
	id: string;
	xStart: string;
	yStart: string;
	xEnd: string;
	yEnd: string;
}

export const createCoordinatesForSvgs = ({ coordinates }: coordinateArray): coordinatesForSvg[] => {
	let result: coordinatesForSvg[] = [];
	if (coordinates.length === 1) {
		return [
			{
				id: `${coordinates[0].id}`,
				xStart: `${coordinates[0].coordx}`,
				yStart: `${coordinates[0].coordy}`,
				xEnd: `${coordinates[0].coordx}`,
				yEnd: `${coordinates[0].coordy}`,
			},
		];
	}

	coordinates.forEach((coordinate, idx) => {
		const { coordx, coordy, id } = coordinate;
		if (idx + 1 === coordinates.length) {
			result = [
				...result,
				{
					id,
					xStart: `${coordx}`,
					yStart: `${coordy}`,
					xEnd: `${coordinates[0].coordx}`,
					yEnd: `${coordinates[0].coordy}`,
				},
			];
		}

		if (idx + 1 < coordinates.length) {
			result = [
				...result,
				{
					id,
					xStart: `${coordx}`,
					yStart: `${coordy}`,
					xEnd: `${coordinates[idx + 1].coordx}`,
					yEnd: `${coordinates[idx + 1].coordy}`,
				},
			];
		}
	});
	return result;
};
