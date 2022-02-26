

export const getRace = (heroes) => {
    let resul = []
    heroes.forEach(h => (!resul.includes(h.appearance.race) && h.appearance.race !== null) && resul.push(h.appearance.race))

    return resul.map(ele => ({ name: ele, id: Math.floor((+new Date() * Math.random())) }))

}
