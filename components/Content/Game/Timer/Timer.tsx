import React, { useEffect } from 'react'
import TimerItem from '../../../../assets/TimerItem'
import timerAnimation from './TimerAnimation'

const Timer = () => {
  useEffect(()=>{
    timerAnimation()
  },[])
  return (
    <div className='timer'>
      <TimerItem/>
    </div>
  )
}

export default Timer