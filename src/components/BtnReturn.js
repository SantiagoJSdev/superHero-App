import { useNavigate } from "react-router-dom";



export const BtnReturn = () => {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate(-1)
      }
  return (
    <>
     <button onClick={handleReturn} className='search-button'>Return</button>
    </>
  )
}
