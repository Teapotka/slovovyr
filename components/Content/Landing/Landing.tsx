import React, { useState } from 'react'
import VyrSVG from '../../../assets/vyr.svg'
import LogoSVG from '../../../assets/logo.svg'
import MapSVG from '../../../assets/map.svg'
import { CSSTransition } from 'react-transition-group'
import Map from './Map'

const Landing = () => {
  const [trigger, settrigger] = useState(false)
  const [change, setchange] = useState(false)
  const startGame = () => {
    settrigger(true)
  }
  return (
    <CSSTransition
      in={trigger}
      timeout={1000}
      classNames={'content'}
      onEntered={() => {setchange(true)}}
    >
      <div className='l-content'>
        {
          change ?   
          <>
        <div className='logo'>
          <LogoSVG />
        </div>
      <div className='map'>
          <Map/>
        </div>
        <div className='button is-inactive' onClick={startGame}>
        оберіть регіон
      </div></>
      :
      <>          
      <div className='vyr'>
      <VyrSVG />
    </div>
    <div className='logo'>
      <LogoSVG />
    </div>
    <div className='button' onClick={startGame}>
    розпочати гру
  </div></>
  
        }
      </div>
    </CSSTransition>
  )
}

export default Landing