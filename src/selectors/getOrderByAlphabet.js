




export const getOrderByAlphabet = (state, value) => {

    let sortAlphabet = (value === 'A-Z') 
    ?
    state.sort((a,b)=> (
        a.name.toLowerCase() > b.name.toLowerCase()) 
        ? 
        1 
        : 
        (b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0 )
    :
    state.sort((a,b)=> (
        a.name.toLowerCase() > b.name.toLowerCase()) 
        ? 
        -1 
        : 
        (b.name.toLowerCase() > a.name.toLowerCase()) ? 1 : 0 )

    return sortAlphabet
}
