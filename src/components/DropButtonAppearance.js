
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getEyesColor } from '../selectors/getEyesColor';
import { getGenres, getRace } from '../selectors/getRace';
import { getHairColor } from '../selectors/getHairColor';
import '../styles/dropButtonAppearence.css'

export const DropButtonAppearance = () => {
    const navigate = useNavigate();
    const { heroes } = useSelector(state => state.data);
    //     let resul =[]
    //    console.log(heroes.forEach(h => (!resul.includes(h.appearance.eyeColor) &&  resul.push(h.appearance.eyeColor)))) 
    // console.log(resul)
    let race = getRace(heroes)
    let eyesColor = getEyesColor(heroes)
    let hairColor = getHairColor(heroes)
    // console.log(race)

    const handleClick = (name) => {
        navigate(`/appearence?q=${name}`)
    }

    return (
        <div className="DropButtonAppearance">Appearence
            <div className="content-appearence">
                <div className="btn-appearence">Gender
                    <div className='content-gender'>
                        <div className="btn-appearence">Male</div>
                        <div className="btn-appearence">Female</div>
                    </div>

                </div>
                <div onClick={()=> handleClick('race')} className="btn-appearence">Race
                    <div className='content-race'>
                    </div>
                </div>
                <div onClick={()=> handleClick('height')} className="btn-appearence">Height</div>
                <div onClick={()=> handleClick('weight')} className="btn-appearence">Weight</div>
                <div onClick={()=> handleClick('eyeColor')} className="btn-appearence">EyeColor</div>
                <div onClick={()=> handleClick('hairColor')} className="btn-appearence">HairColor</div>
            </div>
        </div>
    )
}
