



export const getPowerSpeed = (state) => {
 let action = {
     payload: ''
 }
    let sortSpeed = action.payload === "minor" ?
    state.sort((a, b) => {
        if (a.powerstats.speed > b.powerstats.speed) {
            return 1;
        }
        if (b.powerstats.speed > a.powerstats.speed) {
            return -1;
        }
        return 0;
    })
    : 
    state.sort((a, b) => {
        if (a.powerstats.speed > b.powerstats.speed) {
            return -1;
        }
        if (b.powerstats.speed > a.powerstats.speed) {
            return 1;
        }
        return 0;
    });
return sortSpeed

}
