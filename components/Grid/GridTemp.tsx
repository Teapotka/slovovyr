import React, { FC, ReactNode, useEffect } from 'react'
import { loadThemeData } from '../../data/localMemory'
import ModalContainer from '../Modals/ModalContainer'

const GridTemp:FC<{children: ReactNode[], state : string}> = ({children, state}) => {
    useEffect(()=>{
      loadThemeData()
    },[])
    return (
      <>
      <div className={`temp-l-template temp-l-grid ${state}`}>        
      {children}
      </div>
      <ModalContainer/>
      </>
    )
  }

export default GridTemp