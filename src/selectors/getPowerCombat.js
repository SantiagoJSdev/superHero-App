



export const getPowerCombat = (state, value) => {

    let sortCombat = value === "minor" ?
    state.sort((a, b) => {
        if (a.powerstats.combat > b.powerstats.combat) {
            return 1;
        }
        if (b.powerstats.combat > a.powerstats.combat) {
            return -1;
        }
        return 0;
    })
    : 
    state.sort((a, b) => {
        if (a.powerstats.combat > b.powerstats.combat) {
            return -1;
        }
        if (b.powerstats.combat > a.powerstats.combat) {
            return 1;
        }
        return 0;
    });
return sortCombat

}
