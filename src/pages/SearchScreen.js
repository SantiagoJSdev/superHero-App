import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import queryString from 'query-string';
import { getHeroeByName } from '../selectors/getHeroeByName';
import { InputSearch } from '../components/InputSearch';
import { addData, heroById } from '../action/dataAction';
import { BigCard } from '../components/BigCard';
import { BtnReturn } from '../components/BtnReturn';

import '../styles/searchScreenStyles.css'

export const SearchScreen = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const {data, error} = useSelector(state => state);
  const {heroes, heroId } = data;

  const { q: name } = queryString.parse(location.search) || '';
  
  useEffect(() => {
    let data = (getHeroeByName(heroes, name))
    dispatch(addData())
    dispatch(heroById(data))
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
              (!heroId || heroId.length === 0)?
              <h2>{error.error}</h2>
              
              :
              heroId?.map(hero => (
                <div key={hero.id}>
                  <Link to={`/detail/${hero.id}`}>
                  <BigCard name={hero.name} id={hero.id} img={hero.images['sm']} publisher={hero.biography.publisher} />
                  </Link>
                </div>
              ))
              
            }
          </div>
        </div>
      </div>

    </>
  )
}
