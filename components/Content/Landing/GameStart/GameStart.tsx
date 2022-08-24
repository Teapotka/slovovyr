import classNames from 'classnames'
import React, { FC, useEffect, useRef, useState } from 'react'
import Map from './Map'
import LogoSVG from '../../../../assets/Logo'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store'

// const time = new Date(2022, 7, 24, 23, 59)
const GameStart:FC<{navigate: (data: string)=> void}> = ({navigate}) => {
    const active = useSelector((state:RootState)=>state.regions.choise)
    const choise = useSelector((state:RootState)=>state.regions.region)
    const [time, settime] = useState(new Date())
    const condition = time.getHours() == 23 && time.getMinutes() >= 45 || time.getHours() == 0 && time.getMinutes() <= 15
    setInterval(()=>{
        const timecheck = new Date()
        if(timecheck.getHours() == 23 && timecheck.getMinutes() >= 45 || timecheck.getHours() == 0 && timecheck.getMinutes() <= 15)
        settime(new Date())
    },60000)
    console.log(time)
  return (
    <>
        <div className='logo'>
          <LogoSVG />
        </div>
      <div className='map'>
          <Map/>
        </div>
        <div
        data-testid='button'
        className={classNames('border button', !Object.values(active).includes(true) || condition ? 'is-inactive' : '')}
        onClick={()=> Object.values(active).includes(true) && !condition ? navigate(choise): null}>
        {Object.values(active).includes(true) ?
        condition ?
        'гра оновиться о 00:15'
        :
        'рушаймо !' 
         :
          'оберіть регіон'}
      </div></>
  )
}

export default GameStart