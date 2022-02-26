



export const getPowerIntelligence = (state, value) => {

    // let action = {
    //     payload: ''
    // }

    let sortIntelligence = value === "minor" ?
        state.sort((a, b) => {
            if (a.powerstats.intelligence > b.powerstats.intelligence) {
                return 1;
            }
            if (b.powerstats.intelligence > a.powerstats.intelligence) {
                return -1;
            }
            return 0;
        })
        :
        state.sort((a, b) => {
            if (a.powerstats.intelligence > b.powerstats.intelligence) {
                return -1;
            }
            if (b.powerstats.intelligence > a.powerstats.intelligence) {
                return 1;
            }
            return 0;
        });

    return  sortIntelligence
    
}
