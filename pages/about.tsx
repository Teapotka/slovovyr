import { NextSeo } from 'next-seo'
import React from 'react'
import About from '../components/Content/About/About'
import GridTemp from '../components/Grid/GridTemp'
import HeaderTemp from '../components/Header/HeaderTemp'
import { about } from '../data/keywords'

const AboutPage = () => {
  return (
    <>
    <NextSeo additionalMetaTags={[{name: 'keywords', content: about}]}/>
        <GridTemp state=''>
            <HeaderTemp type='alternative'/>
            <About/>
        </GridTemp>
    </>
  )
}

export default AboutPage