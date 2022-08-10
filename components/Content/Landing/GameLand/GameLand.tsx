import React, { FC } from 'react'
import VyrSVG from '../../../../assets/Vyr'
import LogoSVG from '../../../../assets/Logo'

const GameLand:FC<{startGame: ()=> void}> = ({startGame}) => {
  return (
    <>          
    <div className='vyr'>
    <VyrSVG />
  </div>
  <div className='logo'>
    <LogoSVG />
  </div>
  <div className='button' data-testid='button' onClick={startGame}>
  розпочати гру
</div></>
  )
}

export default GameLand