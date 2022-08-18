import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import InfoModal from './InfoModal'
import LoseModal from './LoseModal'
import SettingsModal from './SettingsModal'
import WinModal from './WinModal'

const calculate = () =>{
  const value = Math.trunc(+document.getElementById('timer')!.style.strokeDashoffset.slice(0, -2)*300/248.18588256835938)
  console.log(value)
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
        <div className={classNames('modal', modal == 'none' && 'is-hidden')}>
        {modals[modal]}
        </div>
    </>
  )
}

export default ModalContainer