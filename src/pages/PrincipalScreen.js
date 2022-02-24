import { useDispatch } from "react-redux";
import { addData } from "../action/dataAction";
import { InputSearch } from "../components/InputSearch";

import '../styles/principalStyles.css'

export const PrincipalScreen = () => {


  const dispatch = useDispatch();
  const handleClick = () => {
    const data = {
      name: 'santiago'
    }
    dispatch(addData(data))
  }

  return (
    <>
      <div className="container-principal">
        {/* <h1>PrincipalScreen</h1> */}
        <header className="principal-header"></header>
        <section className="principal-section">
          <div className="section-title">
            
            <InputSearch/>

          </div>
          <div className="section-dashboard"></div>
        </section>
        <footer className="principal-footer"></footer>
        <button onClick={handleClick}>add</button>
      </div>
    </>
  )
}
