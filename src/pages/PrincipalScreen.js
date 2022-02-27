import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addData, addDataFilterAppearance } from "../action/dataAction";
import { Cards } from "../components/Cards";
import { DropButton } from "../components/DropButton";
import { DropButtonAppearance } from "../components/DropButtonAppearance";
import { InputSearch } from "../components/InputSearch";

import '../styles/principalStyles.css'


export const PrincipalScreen = () => {

  const dispatch = useDispatch();
  const { heroes } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(addData())
    dispatch(addDataFilterAppearance([]))
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
        <header className="principal-header">
          <div className="header-content">
            <DropButtonAppearance />
            <InputSearch />
          </div>
        </header>
        <section className="principal-section">
          <div className="section-title">
            <div className="buttonsInternos">
              <DropButton />
            </div>
          </div>
          <div className="section-dashboard">
            <Cards
              heroes={heroes}
            />
          </div>
        </section>
        {/* <footer className="principal-footer">
        </footer> */}
      </div>
    </>
  )
}
