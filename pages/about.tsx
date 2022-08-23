import React from 'react'
import { Provider } from 'react-redux'
import About from '../components/Content/About/About'
import GridTemp from '../components/Grid/GridTemp'
import HeaderTemp from '../components/Header/HeaderTemp'
import { store } from '../store'

const AboutPage = () => {
  return (
    // <Provider store={store}>
        <GridTemp state=''>
            <HeaderTemp type='alternative'/>
            <About/>
        </GridTemp>
    // </Provider>
  )
}

export default AboutPage