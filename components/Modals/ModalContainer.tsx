import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import SettingsModal from './SettingsModal'

const ModalContainer = () => {
    const modal = useSelector((state:RootState)=> state.modals.modal)
    console.log(modal)
    const modals = {
        settings: <SettingsModal/>,
        none: ''
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