import anime from 'animejs'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Arrow from '../../assets/Arrow'
import Info from '../../assets/Info'
import Logo from '../../assets/Logo'
import SettingsSVG from '../../assets/Settings'
import { setFunctions } from '../../store/animationSlice'
import { toggle } from '../../store/modalSlice'

const HeaderGame = () => {
  const [animation, setanimation] = useState<any>(null)
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(()=>{
    //FIXME: animation start when header is in page
  setanimation(
      anime.timeline({
      duration: 5 * 60 * 1000,
      easing: "linear",
  }))
  },[])
  useEffect(()=>{
    animation != null && animation.add({
      targets: '#timer',
      strokeDashoffset: [0, anime.setDashoffset],
      // stroke: ['#404040', '#FF0000']
    })
    animation != null && animation.finished.then(()=>dispatch(toggle('lose')))
    animation != null && dispatch(setFunctions({play: animation.play, pause: animation.pause}))  
  },[animation])
  const handle = (key: 'settings' | 'info') =>{
    if(animation != null){
      animation.paused == false && animation.pause()
      dispatch(toggle(key))
    }
  }
  // const playanim = () =>{
  //   console.log('logo click')
  //   if(animation != null){
  //     animation.paused ? animation.play() : animation.pause()
  //   }
  // }
  return (
    <div className="l-header is-game">
      <div className="back-arrow" onClick={()=>router.push('/')}>
        <Arrow/>
      </div>
      <div className="logo is-small" id='logo'>
        <Logo/>
      </div>
      <div className="setting-icons">
        <div className="setting-icon" onClick={()=>handle('info')}>
        <Info/>
        </div>
        <div className="setting-icon" id='settings' onClick={()=>handle('settings')}>
        <SettingsSVG/>
        </div>
      </div>
    </div>
  )
}

export default HeaderGame