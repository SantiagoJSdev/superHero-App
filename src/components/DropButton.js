import { useState } from "react"
import { useDispatch } from "react-redux";
import { orderByAlphabet, orderByPowerCombat, orderByPowerDurability, orderByPowerIntelligence, orderByPowerPower, orderByPowerSpeed, orderByPowerStrength } from "../action/dataAction";

import '../styles/dropButtonStyles.css'


export const DropButton = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState({
        intelligence: false,
        strength: false,
        speed: false,
        durability: false,
        power: false,
        combat: false,
        alphabet: false
    })

    const handleIntelligence = () => {
        setValue(value => ({ ...value, intelligence: !value.intelligence }))
        if (!value.intelligence) {
            dispatch(orderByPowerIntelligence('mayor'))
        } else {
            dispatch(orderByPowerIntelligence('minor')) 
        }
    }
    const handleStrength = () => {
        setValue(value => ({ ...value, strength: !value.strength }))
        if (!value.strength) {
            dispatch(orderByPowerStrength('mayor'))
        } else {
            dispatch(orderByPowerStrength('minor'))
        }
    }
    const handleSpeed = () => {
        setValue(value => ({ ...value, speed: !value.speed }))
        if (!value.speed) {
            dispatch(orderByPowerSpeed('mayor'))
        } else {
            dispatch(orderByPowerSpeed('minor'))
        }
    }
    const handleDurability = () => {
        setValue(value => ({ ...value, durability: !value.durability }))
        if (!value.durability) {
            dispatch(orderByPowerDurability('mayor'))
        } else {
            dispatch(orderByPowerDurability('minor'))
        }
    }
    const handlePower = () => {
        setValue(value => ({ ...value, power: !value.power }))
        if (!value.power) {
            dispatch(orderByPowerPower('mayor'))
        } else {
            dispatch(orderByPowerPower('minor'))
        }
    }
    const handleCombat = () => {
        setValue(value => ({ ...value, combat: !value.combat }))
        if (!value.combat) {
            dispatch(orderByPowerCombat('mayor'))
        } else {
            dispatch(orderByPowerCombat('minor'))
        }
    }
    const handleAlphabet = () => {
        setValue(value => ({ ...value, alphabet: !value.alphabet }))
        if (!value.alphabet) {
            dispatch(orderByAlphabet('A-Z'))
        } else {
            dispatch(orderByAlphabet('Z-A'))
        }
    }

    return (
        <div className="drop-button">Order By Skill
            <div className="content-skill">
                <div onClick={handleIntelligence} className="btn-skill">Intelligence
                    <div className={(value.intelligence) ? "skill-active" : 'block'}>X</div>
                </div>
                <div onClick={handleStrength} className="btn-skill">Strength
                    <div className={(value.strength) ? "skill-active" : 'block'}>X</div>
                </div>
                <div onClick={handleSpeed} className="btn-skill">Speed
                    <div className={(value.speed) ? "skill-active" : 'block'}>X</div>
                </div>
                <div onClick={handleDurability} className="btn-skill">Durability
                    <div className={(value.durability) ? "skill-active" : 'block'}>X</div>
                </div>
                <div onClick={handlePower} className="btn-skill">Power
                    <div className={(value.power) ? "skill-active" : 'block'}>X</div>
                </div>
                <div onClick={handleCombat} className="btn-skill">Combat
                    <div className={(value.combat) ? "skill-active" : 'block'}>X</div>
                </div>
                <div onClick={handleAlphabet} className="btn-skill">Alphabet
                    <div className={(value.alphabet) ? "skill-active" : 'block'}>X</div>
                </div>
        
            </div>
        </div>
    )
}
