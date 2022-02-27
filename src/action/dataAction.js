
import { getOrderByAlphabet, getPowerCombat, getPowerDurability, getPowerIntelligence, getPowerPower, getPowerSpeed, getPowerStrength } from "../selectors"

import { types } from "../types/types"

const url = 'https://akabab.github.io/superhero-api/api//all.json'


export const addData = () => {

    return async (dispatch) => {
        try {
            let resp = await fetch(url)
            let data = await resp.json()
            dispatch({
                type: types.GETDATA,
                payload: data
            })
        } catch (e) {
            console.log('Game not found')
        }
    }
}

export const heroById = (hero) => {
    return async (dispatch) => {

        if (hero === 'Nombre no encontrado') {
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

    return async (dispatch, getState) => {
        const { heroes } = getState().data
        let data = getPowerIntelligence(heroes, value)
        dispatch({
            type: types.ORDERBYPOWERINTELLIGENCE,
            payload: data
        })
    }
}
export const orderByPowerStrength = (value) => {

    return async (dispatch, getState) => {
        const { heroes } = getState().data
        let data = getPowerStrength(heroes, value)
        dispatch({
            type: types.ORDERBYPOWERSTRENGTH,
            payload: data
        })
    }
}
export const orderByPowerSpeed = (value) => {

    return async (dispatch, getState) => {
        const { heroes } = getState().data
        let data = getPowerSpeed(heroes, value)
        dispatch({
            type: types.ORDERBYPOWERSPEED,
            payload: data
        })
    }
}
export const orderByPowerDurability = (value) => {

    return async (dispatch, getState) => {
        const { heroes } = getState().data
        let data = getPowerDurability(heroes, value)
        dispatch({
            type: types.ORDERBYPOWERDURABILITY,
            payload: data
        })
    }
}
export const orderByPowerPower = (value) => {

    return async (dispatch, getState) => {
        const { heroes } = getState().data
        let data = getPowerPower(heroes, value)
        dispatch({
            type: types.ORDERBYPOWERPOWER,
            payload: data
        })
    }
}
export const orderByPowerCombat = (value) => {

    return async (dispatch, getState) => {
        const { heroes } = getState().data
        let data = getPowerCombat(heroes, value)
        dispatch({
            type: types.ORDERBYPOWERCOMBAT,
            payload: data
        })
    }
}
export const orderByAlphabet = (value) => {

    return async (dispatch, getState) => {
        const { heroes } = getState().data
        let data = getOrderByAlphabet(heroes, value)
        dispatch({
            type: types.ORDERBYALPHABET,
            payload: data
        })
    }
}
export const addDataFilterAppearance = (data) => {

    return {
        type: types.ADDAPPEARANCE,
        payload: data
    }

}
export const addWeight = (data) => {

    return {
        type: types.ADDWEIGHT,
        payload: data
    }

}
export const addHeight = (data) => {

    return {
        type: types.ADDHEIGHT,
        payload: data
    }

}
export const addError = (error) => {
    return {
        type: types.ADDERROR,
        payload: error
    }
}