
import '../styles/searchScreenStyles.css'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getHeroeByName } from '../selectors/getHeroeByName';
import { useSelector } from 'react-redux';
import { InputSearch } from '../components/InputSearch';



export const SearchScreen = () => {

  const { heroes } = useSelector(state => state.data);
  const location = useLocation();
  const { q: name } = queryString.parse(location.search) || '';

  console.log(getHeroeByName(heroes, name))
  if (!heroes) {
    return <h1>Loadig</h1>
  }
  return (
    <>
      <div className='container-search'>
        <div search-interno>
          <InputSearch />
        </div>
      </div>

    </>
  )
}
