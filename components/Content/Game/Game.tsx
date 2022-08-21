import React from 'react'
import Field from './Field/Field'
import Keyboard from './Keyboard/Keyboard'
import Timer from './Timer/Timer'
import TimerTemp from './Timer/TimerTemp'

const Game = () => {
  return(
    <div className='game-area'>
      <TimerTemp/>
      <Field/>
      <Keyboard/>
    </div>
  )
}

export default Game