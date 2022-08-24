import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CHOISE_KEY, removeData, setData } from '../../../data/localMemory'
import GameLand from './GameLand/GameLand'
import GameStart from './GameStart/GameStart'

const Landing = () => {
  const [trigger, settrigger] = useState(false)
  const [change, setchange] = useState(false)
  const router = useRouter()
  const startGame = () => {
    settrigger(true)
  }
  const navigate = (region: string) =>{
    setData(CHOISE_KEY, region)
    router.push('/game')
  }
  return (
    <CSSTransition
      in={trigger}
      timeout={1000}
      classNames={'content'}
      onEntered={() => {setchange(true)}}
    >
      <div className='temp-l-template l-content'>
        {
          change ?   
          <GameStart navigate={(region: string)=>navigate(region)}/>
          :
          <GameLand startGame={startGame}/>
        }
      </div>
    </CSSTransition>
  )
}

export default Landing