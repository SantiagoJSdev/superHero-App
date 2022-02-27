
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addData } from '../action/dataAction';
import { BigCard } from '../components/BigCard';
import { BtnReturn } from '../components/BtnReturn';
import { getHeroesById } from '../selectors/getHeroesById';

import '../styles/detailStyles.css';

export const DetailScreen = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const { heroes } = useSelector(state => state.data);
  let data = getHeroesById(heroes, id)

  useEffect(() => {
    dispatch(addData())
    data = getHeroesById(heroes, id)
  }, [])

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
      <div className='contain-detail'>
        <BtnReturn />

        <div>
          {
            data?.map(hero => (

              <div className='hero-description' key={hero.id}>

                <BigCard
                  name={hero.name}
                  img={hero.images.sm}
                  publisher={hero.biography.publisher}
                />
                <BigCard
                  name={hero.name}
                  publisher={hero.biography.publisher}
                  description={hero.biography}
                  work={hero.work}
                  appearance={hero.appearance}
                />

              </div>
            ))
          }
        </div>



      </div>
    </>
  )
}
