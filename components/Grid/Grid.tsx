import React, { FC, ReactNode } from 'react'
import ModalContainer from '../Modals/ModalContainer'
import SettingsModal from '../Modals/SettingsModal'

// takes all the elements and places them in the grid
const Grid:FC<{children: ReactNode[]}> = ({children}) => {
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