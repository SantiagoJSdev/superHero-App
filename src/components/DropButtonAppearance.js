
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getEyesColor } from '../selectors/getEyesColor';
import { getGenres } from '../selectors/getGenres';
import { getHairColor } from '../selectors/getHairColor';
import '../styles/dropButtonAppearence.css'

export const DropButtonAppearance = () => {

    const {heroes} = useSelector( state => state.data );
//     let resul =[]
//    console.log(heroes.forEach(h => (!resul.includes(h.appearance.eyeColor) &&  resul.push(h.appearance.eyeColor)))) 
// console.log(resul)
   let genres = getGenres(heroes)
   let eyesColor = getEyesColor(heroes) 
   let hairColor = getHairColor(heroes)
   console.log(hairColor)
   
    

    return (
        <div className="DropButtonAppearance">Appearence
            <div className="content-appearence">
                <div className="btn-appearence">Gender
                    <div className='content-gender'>
                        <div className="btn-appearence">Male</div>
                        <div className="btn-appearence">Female</div>
                    </div>

                </div>
                <div className="btn-appearence">Race
                <div className='content-race'>
                        {
                            genres?.map(g => (
                                <div className='btn-genres' key={g}>{g}</div>
                            ))
                        }
                        </div>
                </div>
                <div className="btn-appearence">Height</div>
                <div className="btn-appearence">Weight</div>
                <div className="btn-appearence">EyeColor</div>
                <div className="btn-appearence">HairColor</div>
            </div>
        </div>
    )
}
