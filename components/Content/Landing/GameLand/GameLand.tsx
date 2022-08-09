import React, { FC } from 'react'
import VyrSVG from '../../../../assets/vyr.svg'
import LogoSVG from '../../../../assets/logo.svg'

const GameLand:FC<{startGame: ()=> void}> = ({startGame}) => {
  return (
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
  )
}

export default GameLand