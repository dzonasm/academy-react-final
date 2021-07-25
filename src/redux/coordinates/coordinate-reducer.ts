import { coordinateArray, coordinateReducerAction, ADD_COORDINATE, REMOVE_COORDINATE } from "../types/types";

export interface emptyCoordinates {
	coordinates: [];
}

const INITIAL_STATE = {
	coordinates: [],
};

const coordinateReducer = (
	state: coordinateArray | emptyCoordinates = INITIAL_STATE,
	action: coordinateReducerAction,
) => {
	switch (action.type) {
		case ADD_COORDINATE:
			return {
				...state,
				coordinates: [...state.coordinates, action.payload],
			};
		case REMOVE_COORDINATE:
			return {
				...state,
				coordinates: state.coordinates.filter(coord => coord.id !== action.payload.id),
			};

		default:
			return state;
	}
};

export default coordinateReducer;
