import React from 'react'
import Game from '../components/Content/Game/Game'
import Grid from '../components/Grid/Grid'
import Header from '../components/Header/HeaderGame'

const game = () => {
  return (
    <Grid>
         <Header/>
         <Game/>
    </Grid>
  )
}

export default game