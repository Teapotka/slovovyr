import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import Arrow from '../../assets/Arrow'
import Logo from '../../assets/Logo'
import Settings from '../../assets/Settings'
import { toggle } from '../../store/modalSlice'

const HeaderAlternative = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const handle = (key: 'settings') =>{
          dispatch(toggle(key))
      }
    return (
    <div className="l-header is-game">
      <div className="back-arrow" onClick={()=>router.push('/')}>
        <Arrow/>
      </div>
      <div className="logo is-small" id='logo'>
        <Logo/>
      </div>
      <div className="setting-icons">
        <div className="setting-icon" id='settings' onClick={()=>handle('settings')}>
        <Settings/>
        </div>
      </div>
    </div>
  )
}

export default HeaderAlternative