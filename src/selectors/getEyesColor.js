


export const getEyesColor = (heroes) => {
 
    let resul = []
    heroes.forEach(h => ((!resul.includes(h.appearance.eyeColor) && h.appearance.eyeColor !== '-') &&  resul.push(h.appearance.eyeColor)))
 return resul
}
