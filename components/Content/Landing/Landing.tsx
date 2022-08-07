import React from 'react'
import VyrSVG from '../../../assets/vyr.svg'
import LogoSVG from '../../../assets/logo.svg'

const Landing = () => {
  return (
    <div className='l-content'>
      <div className='vyr'>
      <VyrSVG/>
      </div>
      <div className='logo'>
      <LogoSVG/>
      </div>
      <div className='button'>
        розпочати гру
      </div>
    </div>
  )
}

export default Landing