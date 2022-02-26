import { useState } from "react"
import { useDispatch } from "react-redux";
import { addData, orderByPowerIntelligence, orderByPowerStrength } from "../action/dataAction";

import '../styles/dropButtonStyles.css'


export const DropButton = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState({
        intelligence: false,
        strength: false,
    })

    const handleIntelligence = () => {
        setValue(value => ({ ...value, intelligence: !value.intelligence }))
        if (!value.intelligence) {
            dispatch(orderByPowerIntelligence())
        } else {
            dispatch(addData())
        }
    }
    const handleStrength = () => {
        setValue(value => ({ ...value, strength: !value.strength }))
        if (!value.strength) {
            dispatch(orderByPowerStrength())
        } else {
            dispatch(addData())
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
              
              
                <div className="btn-skill">Speed</div>
                <div className="btn-skill">Durability</div>
                <div className="btn-skill">Power</div>
                <div className="btn-skill">Combat</div>
            </div>
        </div>
    )
}
