



export const getPowerDurability = (state) => {
 let action = {
     payload: ''
 }
    let sortDurability = action.payload === "minor" ?
    state.sort((a, b) => {
        if (a.powerstats.durability > b.powerstats.durability) {
            return 1;
        }
        if (b.powerstats.durability > a.powerstats.durability) {
            return -1;
        }
        return 0;
    })
    : 
    state.sort((a, b) => {
        if (a.powerstats.durability > b.powerstats.durability) {
            return -1;
        }
        if (b.powerstats.durability > a.powerstats.durability) {
            return 1;
        }
        return 0;
    });
return sortDurability

}
