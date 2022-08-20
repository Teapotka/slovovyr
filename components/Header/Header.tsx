import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import SettingSVG from '../../assets/Settings'
import { toggle } from '../../store/modalSlice'

const Header = () => {
  const dispatch = useDispatch()
  const handle = (key: 'settings') =>{
      dispatch(toggle(key))
  }
  const router = useRouter()
  return (
    <div className="l-header">
      <div className="navigation">
        <div>про нас</div>
        <div onClick={()=>router.push('/history')}>історія</div>
        <div onClick={()=>router.push('/server')}>апі</div>
      </div>
      <div className="icon" onClick={()=>handle('settings')}>
        <SettingSVG />
      </div>
    </div>
  )
}

export default Header