import React from 'react'
import Cross from '../../assets/Cross'
import Switch from '../../assets/Switch'

const SettingsModal = () => {
  return (
    <div className='settings-modal'>
        <div className='header-modal'>
            <div className='label-modal'>Налаштування</div>
            <div className='cross-modal'><Cross/></div>
        </div>
        <div className='content-modal'>
            <div className='text-modal'>Темна тема</div>
            <div className='switch-modal'><Switch/></div>
            <div className='text-modal'>Режим дальтонізму</div>
            <div className='switch-modal'><Switch/></div>
        </div>
    </div>
  )
}

export default SettingsModal