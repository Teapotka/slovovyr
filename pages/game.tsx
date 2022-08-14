import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import Game from '../components/Content/Game/Game'
import Grid from '../components/Grid/Grid'
import Header from '../components/Header/HeaderGame'
import { CHOISE_KEY, getData } from '../data/localMemory'
import { store } from '../store'

const game = () => {
  const router = useRouter()
  useEffect(()=>{
    getData(CHOISE_KEY) ? null : router.push('/')
  })
    return (
      <Provider store={store}>
      <Grid>
         <Header/>
         <Game/>
    </Grid>
      </Provider>
  )
}

export default game