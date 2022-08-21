import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import Game from '../components/Content/Game/Game'
import Grid from '../components/Grid/Grid'
import GridTemp from '../components/Grid/GridTemp'
import Header from '../components/Header/HeaderGame'
import HeaderTemp from '../components/Header/HeaderTemp'
import { CHOISE_KEY, getData } from '../data/localMemory'
import { store } from '../store'

const game = () => {
  const router = useRouter()
  useEffect(()=>{
    getData(CHOISE_KEY) ? null : router.push('/')
  })
    return (
      <Provider store={store}>
      <GridTemp>
         <HeaderTemp type='game'/>
         <Game/>
    </GridTemp>
      </Provider>
  )
}

export default game