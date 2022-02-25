import { types } from "../types/types";



export const errorReducer = (state = {}, action) => {
 
    switch (action.type) {
       
        case types.ADDERROR:
            return{
                ...state,
                error: action.payload
            }
    
        default:
            return state;
    }
}
