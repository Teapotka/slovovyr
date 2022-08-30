import React, {FC, ReactNode, useEffect, useState} from 'react'
import { loadThemeData } from '../../data/localMemory'
import ModalContainer from '../Modals/ModalContainer'

const GridTemp:FC<{children: ReactNode[], state : string}> = ({children, state}) => {
   const [addressbar, setbar] = useState<null|number>(null)
    useEffect(()=>{
      loadThemeData()
      setbar( document.querySelector('.temp-l-grid')!.clientHeight - window.innerHeight + 50)
    },[])
    return (
      <>
      <div className={`temp-l-template temp-l-grid ${state}`} style={ {gridTemplateRows:`50px calc(100vh - ${addressbar == null ? 50 : addressbar}px)`}} >
      {children}
      </div>
      <ModalContainer/>
      </>
    )
  }

export default GridTemp