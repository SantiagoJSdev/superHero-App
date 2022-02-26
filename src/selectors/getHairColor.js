

export const getHairColor = (heroes) => {
  
    let resul = []
    heroes.forEach(h => ((!resul.includes(h.appearance.hairColor) && h.appearance.hairColor !== '-') &&  resul.push(h.appearance.hairColor)))
 return resul
}
