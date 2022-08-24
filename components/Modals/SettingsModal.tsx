import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cross from '../../assets/Cross'
import Switch from '../../assets/Switch'
import { getData, loadSwitcherData, setData, THEME_KEY, updateThemeData } from '../../data/localMemory'
import { RootState } from '../../store'
import { toggle } from '../../store/modalSlice'
import style from './Modals.module.css'

const SettingsModal = () => {
  const dispatch = useDispatch()
  const controllers = useSelector((state: RootState) => state.animations)
  const router = useRouter()
  const {template, settings, header,
     label, cross, content, grid, settings_content} = style
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
    <div className={classNames('border', template, settings)}>
<div className={header}>
        <div className={label}>Налаштування</div>
        <div className={cross} onClick={close}><Cross /></div>
      </div>
      <div className={classNames(content, settings_content)}>
        <div className={grid}>
         <div>Темна тема</div>
         <div className='switch-modal is-inactiveSVG'   id='dark' onClick={(e) => theme(e, 'dark')}><Switch /></div>
        </div>
        <div className={grid}>
         <div>Режим дальтонізму</div>
         <div className='switch-modal is-inactiveSVG'  id='color-blindness' onClick={(e) => theme(e, 'color-blindness')}><Switch /></div>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal