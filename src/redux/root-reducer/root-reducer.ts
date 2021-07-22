import { combineReducers } from "redux";

import coordinateReducer from "../coordinates/coordinate-reducer";
import userReducer from "../userReducer/user-reducer";

const rootReducer = combineReducers({
	coordinates: coordinateReducer,
	user: userReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
