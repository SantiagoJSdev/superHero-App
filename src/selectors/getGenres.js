

export const getGenres = (heroes) => {
    let resul = []
    heroes.forEach(h => (!resul.includes(h.appearance.race) && h.appearance.race !== null) && resul.push(h.appearance.race))

    return resul

}
