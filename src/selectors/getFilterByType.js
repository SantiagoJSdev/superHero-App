


export const getFilterByType = (type = '', value, heroes) => {

    let resp = []
    switch (value) {
        case 'race':
            resp = heroes.filter(hero => hero.appearance.race === type)
            break;
        case 'eyeColor':
            resp = heroes.filter(hero => hero.appearance.eyeColor === type)
            break;
        case 'hairColor':
            resp = heroes.filter(hero => hero.appearance.hairColor === type)
            break;
        case 'Male':
            resp = heroes.filter(hero => hero.appearance.gender === 'Male')
            break;
        case 'Female':
            resp = heroes.filter(hero => hero.appearance.gender === 'Female')
            break;
        // case 'height':
        //     resp = heroes.filter(hero => hero.appearance.gender === 'Female')
        //     break;
        default:
            break;
    }

    return resp
}
