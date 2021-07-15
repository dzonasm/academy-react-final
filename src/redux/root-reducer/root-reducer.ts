import { combineReducers } from "redux";

import shoppingCartReducer from "../shopping-cart/shopping-cart.reducer";
import userReducer from "../userReducer/user-reducer";

const rootReducer = combineReducers({
	shoppingCart: shoppingCartReducer,
	user: userReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
