import React, { FC, ReactNode, useEffect } from 'react'
import { loadThemeData } from '../../data/localMemory'
import ModalContainer from '../Modals/ModalContainer'

const GridTemp:FC<{children: ReactNode[]}> = ({children}) => {
    useEffect(()=>{
      loadThemeData()
    },[])
    return (
      <>
      <div className='temp-l-grid'>        
      {children}
      </div>
      <ModalContainer/>
      </>
    )
  }

export default GridTemp