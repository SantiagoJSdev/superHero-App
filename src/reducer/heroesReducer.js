import { type } from "@testing-library/user-event/dist/type";




export const heroesReducer = (state = {}, action) => {
  
    switch (action.type) {

        case 'add':
            return {
                ...state,
                heroes: action.payload
            }
    
        default:
            return state;
    }
}
