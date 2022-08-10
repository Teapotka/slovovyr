import React from 'react'
import Field from './Field/Field'
import Keyboard from './Keyboard/Keyboard'
import Timer from './Timer/Timer'

const Game = () => {
  return(
    <div className='game-area'>
      <Timer/>
      <Field/>
      <Keyboard/>
    </div>
  )
}

export default Game