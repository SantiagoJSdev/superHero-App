
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import '../styles/appearenceScreenStyles.css'

import { getItems } from '../selectors/getItems';
import { getFilterByType } from '../selectors/getFilterByType';
import { addDataFilterAppearance, addHeight, addWeight } from '../action/dataAction';
import { CardsAppearance } from '../components/CardsAppearance';
import { BtnReturn } from '../components/BtnReturn';
import { getMayorMenor } from '../selectors/getMayorMenor';
import { getMayorMenosHeight } from '../selectors/getMayorMenosHeight';


export const AppearenceScreen = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const { q: name } = queryString.parse(location.search) || '';
    const { heroes, dataAppearance } = useSelector(state => state.data);

    let { data } = getItems(name, heroes)



    const handleMore = (value, rango) => {


        if (value === 'weight') {
            let data = getMayorMenor(rango, heroes)
            let arr = []
            data.forEach(ele => {
                let resul = heroes.filter(item => item.id === ele.id)
                arr = arr.concat(resul)
            })
            dispatch(addWeight(arr))
        } else if (value === 'height') {
            let data = (getMayorMenosHeight(rango, heroes))
            let arr = []
            data.forEach(ele => {
                let resul = heroes.filter(item => item.id === ele.id)
                arr = arr.concat(resul)
            })
            dispatch(addHeight(arr))
        }



    }
    const handleLess = (value, rango) => {
       

        if (value === 'weight') {
            let data = getMayorMenor(rango, heroes)
            let arr = []
            data.forEach(ele => {
                let resul = heroes.filter(item => item.id === ele.id)
                arr = arr.concat(resul)
            })
            dispatch(addWeight(arr))
        } else if (value === 'height') {
            let data = (getMayorMenosHeight(rango, heroes))
            let arr = []
            data.forEach(ele => {
                let resul = heroes.filter(item => item.id === ele.id)
                arr = arr.concat(resul)
            })

            dispatch(addHeight(arr))
        }
    }
    const hanldeFilterByType = (type) => {

        let respData = (getFilterByType(type, name, heroes))


        if (type === 'height' || type === 'weight') {

        } else {
            dispatch(addDataFilterAppearance(respData))
        }

    }
    return (
        <div className="contain-appearence">
            <div className='appearence-title'>
                <div className='appearence-titleInterno'>
                    <div className='titleInterno-btn'>
                        <BtnReturn />
                    </div>
                    <ul>
                        {
                            data
                                ?
                                data?.map(item => (
                                    <li onClick={() => hanldeFilterByType(item.name)} className='appearence-items' key={item.id}>{item.name}</li>
                                ))
                                :
                                <li onClick={() => hanldeFilterByType(name)} className='appearence-items'>{name}
                                    {
                                        (name === 'height' || name === 'weight') ?
                                            <div className='height-btn'>
                                                <div onClick={() => handleMore(name, 'More')}>More</div>
                                                <div onClick={() => handleLess(name, 'Less')}>Less</div>
                                            </div>
                                            :
                                            ''
                                    }
                                </li>
                        }
                    </ul>
                </div>
            </div>
            <div className='appearence-section'>
                <div className='appearence-sectionInterno'>
                    <div className='cards-interno'>
                        {
                            dataAppearance ?
                                <CardsAppearance
                                    dataAppearance={dataAppearance}
                                />

                                :
                                ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
