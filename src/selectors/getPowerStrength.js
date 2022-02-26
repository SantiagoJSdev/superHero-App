



export const getPowerStrength = (state) => {
 let action = {
     payload: ''
 }
    let sortStrength = action.payload === "minor" ?
    state.sort((a, b) => {
        if (a.powerstats.strength > b.powerstats.strength) {
            return 1;
        }
        if (b.powerstats.strength > a.powerstats.strength) {
            return -1;
        }
        return 0;
    })
    : 
    state.sort((a, b) => {
        if (a.powerstats.strength > b.powerstats.strength) {
            return -1;
        }
        if (b.powerstats.strength > a.powerstats.strength) {
            return 1;
        }
        return 0;
    });
return sortStrength

}
