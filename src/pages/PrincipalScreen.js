import { useDispatch } from "react-redux";
import { addData } from "../action/dataAction";
import { InputSearch } from "../components/InputSearch";
import { heroes } from "../data/heroes";

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
          <div className="section-dashboard">
            
              <div className="section-card">
                <ul>
                {heroes.map(ele=> (
                  <li key={ele.id}>{ele.superhero}</li>
                ))}
                </ul>
              </div>

          </div>
        </section>
        <footer className="principal-footer"></footer>
        <button onClick={handleClick}>add</button>
      </div>
    </>
  )
}
