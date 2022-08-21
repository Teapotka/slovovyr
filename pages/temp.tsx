import React from 'react'
import { Provider } from 'react-redux'
import TimerTemp from '../components/Content/Game/Timer/TimerTemp'
import GridTemp from '../components/Grid/GridTemp'
import HeaderTemp from '../components/Header/HeaderTemp'
import { store } from '../store'

const temp = () => {
  return (
    <Provider store={store}>
    <GridTemp>
        <HeaderTemp type='game'/>
        <TimerTemp/>
    </GridTemp>
    </Provider>
  )
}

export default temp