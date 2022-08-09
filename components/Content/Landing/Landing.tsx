import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import GameLand from './GameLand/GameLand'
import GameStart from './GameStart/GameStart'

const Landing = () => {
  const [trigger, settrigger] = useState(false)
  const [change, setchange] = useState(false)
  const router = useRouter()
  const startGame = () => {
    settrigger(true)
  }
  const navigate = () =>{
    router.push('/game')
  }
  return (
    <CSSTransition
      in={trigger}
      timeout={1000}
      classNames={'content'}
      onEntered={() => {setchange(true)}}
    >
      <div className='l-content'>
        {
          change ?   
          <GameStart navigate={navigate}/>
          :
          <GameLand startGame={startGame}/>
        }
      </div>
    </CSSTransition>
  )
}

export default Landing