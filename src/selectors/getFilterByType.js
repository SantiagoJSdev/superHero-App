


export const getFilterByType = (type, value, heroes) => {
   
  let resp =[]
    switch (value) {
        case 'race':
            resp = heroes.filter(hero => hero.appearance.race === type)
            break;
        case 'eyeColor':
           
        
            break;
        case 'hairColor':
           
        
            break;
        default:
            break;
    }

    return resp
}
