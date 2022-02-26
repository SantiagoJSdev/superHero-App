
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Cards } from '../components/Cards'
import '../styles/appearenceScreenStyles.css'
import queryString from 'query-string';
import { getItems } from '../selectors/getItems';
import { getFilterByType } from '../selectors/getFilterByType';
import { addDataFilterAppearance } from '../action/dataAction';


export const AppearenceScreen = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const { q: name } = queryString.parse(location.search) || '';

    const {heroes, dataAppearance} = useSelector( state => state.data );

    let {data} = getItems(name, heroes)

    const hanldeFilterByType = (type) => {
     
        let respData = (getFilterByType(type, name, heroes))
        dispatch(addDataFilterAppearance(respData))
    }
    return (
        <div className="contain-appearence">
            <div className='appearence-title'>
                <div className='appearence-titleInterno'>
                    <ul>
                        {
                            data?.map(item=>(
                                <li onClick={()=> hanldeFilterByType(item.name)} className='appearence-items' key={item.id}>{item.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='appearence-section'>
                <div className='appearence-sectionInterno'>
                    <div className='cards-interno'>
{
                dataAppearance ?
                    <Cards
                    heroes={dataAppearance}
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
