import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import Game from '../components/Content/Game/Game'
import GridTemp from '../components/Grid/GridTemp'
import HeaderTemp from '../components/Header/HeaderTemp'
import { CHOISE_KEY, getData, readAllData } from '../data/localMemory'
import { store } from '../store'

const game = () => {
  const router = useRouter()
  useEffect(()=>{
    getData(CHOISE_KEY) ? null : router.push('/')
    //@ts-ignore
    readAllData().data.length == 0 && document.querySelector('.temp-l-icons .temp-center-box').click()
  })
    return (
      <GridTemp state='is-scrolless'>
         <HeaderTemp type='game'/>
         <Game/>
    </GridTemp>
  )
}

export default game