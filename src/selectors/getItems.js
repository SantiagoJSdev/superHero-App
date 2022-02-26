import { getEyesColor } from "./getEyesColor";
import { getHairColor } from "./getHairColor";
import { getRace } from "./getRace";




export const getItems = (value, heroes) => {

    let resp = {}
    switch (value) {
        case 'race':
            resp.data = getRace(heroes)
            break;
        case 'height':

            break;
        case 'weight':

            break;
        case 'eyeColor':
            resp.data = getEyesColor(heroes)
            break;
        case 'hairColor':
            resp.data = getHairColor(heroes)
            break;
        default:
            break;
    }
    return resp
}
