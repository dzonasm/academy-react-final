import { combineReducers } from "redux";

// import addsReducer from '../adds/adds.reducer'
import shoppingCartReducer from "../shopping-cart/shopping-cart.reducer";
// import cartWidgetReducer from "../widget-reducer/widget.reducer";
import sortingReducer from "../sorting-reducer/sorting-reducer";

const rootReducer = combineReducers({
	// items: addsReducer,
	shoppingCart: shoppingCartReducer,
	// widget: cartWidgetReducer,
	sort: sortingReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
