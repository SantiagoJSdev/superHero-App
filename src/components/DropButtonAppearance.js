
import { useNavigate } from 'react-router-dom';

import '../styles/dropButtonAppearence.css';

export const DropButtonAppearance = () => {
    const navigate = useNavigate();

    const handleClick = (name) => {
        navigate(`/appearence?q=${name}`)
    }

    return (
        <div className="DropButtonAppearance">Appearence
            <div className="content-appearence">
                <div className="btn-appearence">Gender
                    <div className='content-gender'>
                        <div onClick={()=> handleClick('Male')} className="btn-appearence">Male</div>
                        <div onClick={()=> handleClick('Female')} className="btn-appearence">Female</div>
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
