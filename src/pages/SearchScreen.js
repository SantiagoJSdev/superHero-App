
import '../styles/searchScreenStyles.css'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getHeroeByName } from '../selectors/getHeroeByName';
import { useDispatch, useSelector } from 'react-redux';
import { InputSearch } from '../components/InputSearch';
import { useEffect } from 'react';
import { addData } from '../action/dataAction';
import { BigCard } from '../components/BigCard';
import { Btn, BtnReturn } from '../components/BtnReturn';



export const SearchScreen = () => {

  
  const { heroes } = useSelector(state => state.data);
  const location = useLocation();
  const { q: name } = queryString.parse(location.search) || '';
  const dispatch = useDispatch();
  let data = (getHeroeByName(heroes, name))
  useEffect(() => {
    dispatch(addData())
   data = (getHeroeByName(heroes, name))
   console.log(data)
  }, [name])


  if (!heroes) {
    return <div className='Loading'>
      <h2 className='animation-loading'>
        <div></div>
        <div></div>
        <div></div>
      </h2>
    </div>
  }


  return (
    <>
      <div className='container-search'>
        <div className='search-interno' >
          <InputSearch className='inputCard' />
          <div className='search-btn1'>
           <BtnReturn/>
          </div>

          <div className='inputCard-interno'>
            {
              (!data || data.length === 0)?
              <h2>Name no found</h2>
              :
              data.map(hero => (
                <div key={hero.id}>
                  <BigCard name={hero.name} id={hero.id} img={hero.images['sm']} publisher={hero.biography.publisher} />
                </div>
              ))
              
            }
          </div>
        </div>
      </div>

    </>
  )
}
