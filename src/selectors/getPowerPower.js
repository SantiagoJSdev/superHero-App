



export const getPowerPower = (state, value) => {

    let sortPower = value === "minor" ?
    state.sort((a, b) => {
        if (a.powerstats.power > b.powerstats.power) {
            return 1;
        }
        if (b.powerstats.power > a.powerstats.power) {
            return -1;
        }
        return 0;
    })
    : 
    state.sort((a, b) => {
        if (a.powerstats.power > b.powerstats.power) {
            return -1;
        }
        if (b.powerstats.power > a.powerstats.power) {
            return 1;
        }
        return 0;
    });
return sortPower

}
