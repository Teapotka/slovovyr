import classNames from 'classnames'
import React, { FC, useEffect, useRef } from 'react'
import Map from './Map'
import LogoSVG from '../../../../assets/Logo'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store'

const GameStart:FC<{navigate: (data: string)=> void}> = ({navigate}) => {
    const active = useSelector((state:RootState)=>state.regions.choise)
    const choise = useSelector((state:RootState)=>state.regions.region)
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
        className={classNames('button', !Object.values(active).includes(true) && 'is-inactive')}
        onClick={()=> Object.values(active).includes(true) && navigate(choise)}>
        {Object.values(active).includes(true) ? 'рушаймо !' : 'оберіть регіон'}
      </div></>
  )
}

export default GameStart