import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, orderByAlphabet, orderByPowerCombat, orderByPowerDurability, orderByPowerIntelligence, orderByPowerPower, orderByPowerSpeed, orderByPowerStrength } from "../action/dataAction";
import { Cards } from "../components/Cards";
import { DropButton } from "../components/DropButton";
import { InputSearch } from "../components/InputSearch";


import '../styles/principalStyles.css'

export const PrincipalScreen = () => {


  const dispatch = useDispatch();
  const { heroes } = useSelector(state => state.data);
  useEffect(() => {
    dispatch(addData())
    // dispatch(orderByPowerCombat())

  }, [])
  const add = () => {
    // dispatch(orderByPowerIntelligence())
    // dispatch(orderByPowerStrength())
    // dispatch(orderByPowerSpeed())
    // dispatch(orderByPowerDurability())
    // dispatch(orderByPowerPower())
    dispatch(orderByPowerCombat())
    // dispatch(orderByAlphabet())

  }

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
        <header className="principal-header"></header>
        <section className="principal-section">
          <div className="section-title">

            <InputSearch />
            <DropButton />

          </div>
          <div className="section-dashboard">

            <Cards
              heroes={heroes}
            />

          </div>
        </section>
        <footer className="principal-footer">
          <button onClick={add}>addddddddddddd</button>
        </footer>

      </div>
    </>
  )
}
