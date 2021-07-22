import { RootState } from "../root-reducer/root-reducer";

export const selectCoordinates = (state: RootState) => state.coordinates;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;
