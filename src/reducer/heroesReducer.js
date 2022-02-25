
import { types } from "../types/types";




export const heroesReducer = (state = {}, action) => {

    switch (action.type) {

        case types.GETDATA:
            return {
                ...state,
                heroes: action.payload
            }
        case types.GETHEROBYID:
            return {
                ...state,
                heroId: action.payload
            }
        default:
            return state;
    }
}
