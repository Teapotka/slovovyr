import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { RootState } from '../../store'
import InfoModal from './InfoModal'
import LoseModal from './LoseModal'
import SettingsModal from './SettingsModal'
import WinModal from './WinModal'

const calculate = () =>{
  const value = Math.trunc(+document.getElementById('timer')!.style.strokeDashoffset.slice(0, -2)*300/248.18588256835938)
  console.log('CALC',value)
  return value
}
const ModalContainer = () => {  
    const modal = useSelector((state:RootState)=> state.modals.modal)
    console.log(modal)
    const modals = {
        settings: <SettingsModal/>,
        info: <InfoModal/>,
        win: <WinModal calculate={calculate}/>,
        lose: <LoseModal calculate={calculate}/>,
        none: '',
    }
  return (
    <>
        <div data-testid='modal' className={classNames('modal', modal == 'none' && 'is-hidden')}>
        {modals[modal]}
        </div>
    </>
  )
}

export default ModalContainer