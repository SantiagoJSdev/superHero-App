



export const getPowerCombat = (state) => {
 let action = {
     payload: ''
 }
    let sortCombat = action.payload === "minor" ?
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
