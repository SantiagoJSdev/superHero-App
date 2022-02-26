import { getPowerStrength } from "../selectors/getPowerStrength"
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
export const orderByPowerIntelligence = (value) => {
    return {
        type: types.ORDERBYPOWERINTELLIGENCE,
        payload: 'value'
    }
}
export const orderByPowerStrength = (value) => {

   
    return async (dispatch, getState) =>  {
        const {heroes} = getState().data
console.log(heroes)
    let data = getPowerStrength(heroes)
    dispatch({
        type: types.ORDERBYPOWERSTRENGTH,
        payload: data
    })
    }
}
export const addError = (error) => {
    return    {
        type: types.ADDERROR,
        payload: error
    }
}