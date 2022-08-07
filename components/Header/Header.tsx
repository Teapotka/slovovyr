import React from 'react'
import SettingSVG from '../../assets/settings.svg'

const Header = () => {
  return (
    <div className="l-header">
      <div className="navigation">
        <div>про нас</div>
        <div>історія</div>
        <div>апі</div>
      </div>
      <div className="icon">
        <SettingSVG />
      </div>
    </div>
  )
}

export default Header