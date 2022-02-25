


export const getHeroesById = (data, id) => {
    if ( !data ) {
        return [];
    }
    return data.filter( game => game.id === (id * 1));
}
