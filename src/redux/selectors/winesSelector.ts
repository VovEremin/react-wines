import {RootState} from "../store";

export const getWines = (state: RootState) => {
    return state.wines
}