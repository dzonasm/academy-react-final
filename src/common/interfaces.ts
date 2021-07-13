export interface BoardCoordinate {
	_id: string;
	x: number;
	y: number;
	data: {
		name: string;
		color: string;
		data?: null | string;
		createdAt: string;
	};
}
