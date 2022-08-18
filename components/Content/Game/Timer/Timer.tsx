import anime from 'animejs'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TimerItem from '../../../../assets/TimerItem'
import { RootState } from '../../../../store'

const Timer = () => {
  return (
    <div className='timer'>
      <TimerItem/>
    </div>
  )
}

export default Timer