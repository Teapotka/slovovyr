import React from 'react'
import Arrow from '../../assets/Arrow'
import Info from '../../assets/Info'
import Logo from '../../assets/Logo'
import SettingsSVG from '../../assets/Settings'

const HeaderGame = () => {
  return (
    <div className="l-header is-game">
      <div className="back-arrow">
        <Arrow/>
      </div>
      <div className="logo is-small">
        <Logo/>
      </div>
      <div className="setting-icons">
        <div className="setting-icon">
        <Info/>
        </div>
        <div className="setting-icon">
        <SettingsSVG/>
        </div>
      </div>
    </div>
  )
}

export default HeaderGame