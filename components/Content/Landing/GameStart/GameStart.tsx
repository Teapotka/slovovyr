import classNames from 'classnames'
import React, { FC } from 'react'
import Map from './Map'
import LogoSVG from '../../../../assets/Logo'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store'

const GameStart:FC<{navigate: ()=> void}> = ({navigate}) => {
    const active = useSelector((state:RootState)=>state.regions.choise)
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
        onClick={()=> Object.values(active).includes(true) && navigate()}>
        {Object.values(active).includes(true) ? 'рушаймо !' : 'оберіть регіон'}
      </div></>
  )
}

export default GameStart