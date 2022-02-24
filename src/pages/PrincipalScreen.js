import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../action/dataAction";
import { Cards } from "../components/Cards";
import { InputSearch } from "../components/InputSearch";


import '../styles/principalStyles.css'

export const PrincipalScreen = () => {

  const dispatch = useDispatch();
  const { heroes } = useSelector(state => state.data);
  useEffect(() => {
    dispatch(addData())
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
      <div className="container-principal">
        {/* <h1>PrincipalScreen</h1> */}
        <header className="principal-header"></header>
        <section className="principal-section">
          <div className="section-title">

            <InputSearch />

          </div>
          <div className="section-dashboard">

           <Cards 
           heroes={heroes}
           />

          </div>
        </section>
        <footer className="principal-footer"></footer>
      
      </div>
    </>
  )
}
