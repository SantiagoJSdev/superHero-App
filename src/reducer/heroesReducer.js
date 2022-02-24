import { type } from "@testing-library/user-event/dist/type";
import { types } from "../types/types";




export const heroesReducer = (state = {}, action) => {
  
    switch (action.type) {

        case types.GETDATA:
            return {
                ...state,
                heroes: action.payload
            }
    
        default:
            return state;
    }
}
