import { userActionTypes, userReducerAction, userReducerState } from "../types/types";

const INITIAL_STATE = {
	currentUser: {},
};

const userReducer = (state: userReducerState = INITIAL_STATE, action: userReducerAction) => {
	switch (action.type) {
		case userActionTypes.SET_USER:
			return {
				...state,
				currentUser: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
