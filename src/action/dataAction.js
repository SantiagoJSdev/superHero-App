import { types } from "../types/types"

const url = 'https://akabab.github.io/superhero-api/api//all.json'


export const addData = () => {

    return async (dispatch)=> {
        try{
        let resp = await fetch(url)
        let data  = await resp.json()
        dispatch({
            type: types.GETDATA,
            payload: data
        })
        }catch(e) {
        console.log('Game not found')
    }
}
}

export const heroById = (hero) => {
    return async (dispatch) =>  {
      
        if (hero === 'Nombre no encontrado'){
            dispatch(addError(hero))
            dispatch({
                type: types.GETHEROBYID,
                payload: []
            })
        }
        else {
            dispatch({
                type: types.GETHEROBYID,
                payload: hero
            })
        }
    }
}

export const addError = (error) => {
    return    {
        type: types.ADDERROR,
        payload: error
    }
}