




export const getHeroeByName = (data, name) => {
    if ( name === '' || !data) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return data.filter( hero => hero.name.toLocaleLowerCase().includes( name )  );
}
