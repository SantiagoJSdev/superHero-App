import { useNavigate } from "react-router-dom";



export const BtnReturn = () => {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate('/')
      }
  return (
    <>
     <button onClick={handleReturn} className='search-button'>Return</button>
    </>
  )
}
