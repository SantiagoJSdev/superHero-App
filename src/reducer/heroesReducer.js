
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
        case types.ORDERBYPOWERINTELLIGENCE:

            return {
                ...state,
                heroes: action.payload
            }
        case types.ORDERBYPOWERSTRENGTH:
            return {
                ...state,
                heroes: action.payload
            }
        case types.ORDERBYPOWERSPEED:
            return {
                ...state,
                heroes: action.payload
            }
        case types.ORDERBYPOWERDURABILITY:
            return {
                ...state,
                heroes: action.payload
            }
        case types.ORDERBYPOWERPOWER:
            return {
                ...state,
                heroes: action.payload
            }
        case types.ORDERBYPOWERCOMBAT:
            return {
                ...state,
                heroes: action.payload
            }
        case types.ORDERBYALPHABET:
            return {
                ...state,
                heroes: action.payload
            }
        case types.ADDAPPEARANCE:
            return {
                ...state,
                dataAppearance: action.payload
            }

        default:
            return state;
    }
}
