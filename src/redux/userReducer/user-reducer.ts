import { userActionTypes, userReducerAction, userReducerState } from "../types/types";

const INITIAL_STATE = {
	currentUser: {},
};

const sortingReducer = (state: userReducerState = INITIAL_STATE, action: userReducerAction) => {
	switch (action.type) {
		case userActionTypes.GET_USER_START:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default sortingReducer;
