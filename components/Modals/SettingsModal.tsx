import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cross from '../../assets/Cross'
import Switch from '../../assets/Switch'
import { getData, loadSwitcherData, setData, THEME_KEY, updateThemeData } from '../../data/localMemory'
import { RootState } from '../../store'
import { toggle } from '../../store/modalSlice'

const SettingsModal = () => {
  const dispatch = useDispatch()
  const controllers = useSelector((state: RootState) => state.animations)
  const router = useRouter()
  useEffect(()=>{
    loadSwitcherData()
    setTimeout(()=>{
      document.querySelector('.modal')?.classList.add('anim-appear')
    })
  },[])
  const close = () => {
    document.querySelector('.modal')?.classList.remove('anim-appear')
    document.querySelector('.modal')?.classList.add('anim-hide')
    setTimeout(()=>{
      dispatch(toggle('none'))
      console.log('before click')
    },800)
    // if (router.pathname == '/game')
    //   controllers.play()
  }
  const theme = (e: React.MouseEvent<HTMLDivElement>, theme: string) => {
    console.log(e.target)
    //@ts-ignore
    const switcher = e.target.children[0].children[1]
    if (document.querySelector('body')!.classList.contains(theme)) {
      switcher.style.transform = 'translateX(0px)'
      document.querySelector('body')!.classList.remove(theme)
    }
    else {
      document.querySelector('body')!.classList.add(theme)
      switcher.style.transform = 'translateX(35px)'
    }
    //@ts-ignore
    e.target.classList.toggle('is-inactiveSVG')
    updateThemeData()
  }

  return (
    <div className='settings-modal'>
      <div className='header-modal'>
        <div className='label-modal'>Налаштування</div>
        <div className='cross-modal' onClick={close}><Cross /></div>
      </div>
      <div className='settings-content-modal'>
        <div className='text-modal'>Темна тема</div>
        <div className='switch-modal is-inactiveSVG' id='dark' onClick={(e) => theme(e, 'dark')}><Switch /></div>
        <div className='text-modal'>Режим дальтонізму</div>
        <div className='switch-modal is-inactiveSVG' id='color-blindness' onClick={(e) => theme(e, 'color-blindness')}><Switch /></div>
      </div>
    </div>
  )
}

export default SettingsModal