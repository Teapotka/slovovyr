import React, { FC, ReactNode, useEffect } from 'react'
import { getData, loadThemeData, THEME_KEY } from '../../data/localMemory'
import ModalContainer from '../Modals/ModalContainer'
import SettingsModal from '../Modals/SettingsModal'

// takes all the elements and places them in the grid
const Grid:FC<{children: ReactNode[]}> = ({children}) => {
  useEffect(()=>{
    loadThemeData()
  },[])
  return (
    <>
    <div className='l-grid'>        
    {children}
    </div>
    <ModalContainer/>
    </>
  )
}

export default Grid