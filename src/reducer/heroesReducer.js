
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

            let sortPower = action.payload === "minor" ?
                state.heroes.sort((a, b) => {
                    if (a.powerstats.intelligence > b.powerstats.intelligence) {
                        return 1;
                    }
                    if (b.powerstats.intelligence > a.powerstats.intelligence) {
                        return -1;
                    }
                    return 0;
                })
                :
                state.heroes.sort((a, b) => {
                    if (a.powerstats.intelligence > b.powerstats.intelligence) {
                        return -1;
                    }
                    if (b.powerstats.intelligence > a.powerstats.intelligence) {
                        return 1;
                    }
                    return 0;
                });
            return {
                ...state,
                dataGame: sortPower,
            };
        case types.ORDERBYPOWERSTRENGTH:
            return {
                ...state,
                dataStrength: action.payload
            }

        default:
            return state;
    }
}
