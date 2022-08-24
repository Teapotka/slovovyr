import React from 'react'
import About from '../components/Content/About/About'
import GridTemp from '../components/Grid/GridTemp'
import HeaderTemp from '../components/Header/HeaderTemp'

const AboutPage = () => {
  return (
        <GridTemp state=''>
            <HeaderTemp type='alternative'/>
            <About/>
        </GridTemp>
  )
}

export default AboutPage