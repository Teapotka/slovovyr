import React from 'react'
import { useDispatch } from 'react-redux'
import Cross from '../../assets/Cross'
import Switch from '../../assets/Switch'
import { toggle } from '../../store/modalSlice'

const SettingsModal = () => {
  const dispatch = useDispatch()
  const close = () => {
    console.log('before click')
    document.getElementById('logo')!.click() 
    dispatch(toggle('none'))   
  }
  const theme = (e: React.MouseEvent<HTMLDivElement>, theme: string) => {
    //@ts-ignore
    const switcher =  e.target.children[0].children[1]
    if(document.querySelector('body')!.classList.length){
      switcher.style.transform = 'translateX(0px)'
    }
    else{
      switcher.style.transform = 'translateX(35px)'
    }
    //@ts-ignore
    e.target.classList.toggle('is-inactiveSVG')
    document.querySelector('body')!.classList.toggle(theme)
  }

  return (
    <div className='settings-modal'>
        <div className='header-modal'>
            <div className='label-modal'>Налаштування</div>
            <div className='cross-modal' onClick={close}><Cross/></div>
        </div>
        <div className='settings-content-modal'>
            <div className='text-modal'>Темна тема</div>
            <div className='switch-modal is-inactiveSVG' onClick={(e)=>theme(e, 'dark')}><Switch/></div>
            <div className='text-modal'>Режим дальтонізму</div>
            <div className='switch-modal is-inactiveSVG' onClick={(e)=>theme(e, 'color-blindness')}><Switch/></div>
        </div>
    </div>
  )
}

export default SettingsModal