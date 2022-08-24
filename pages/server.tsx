import { NextSeo } from 'next-seo'
import React from 'react'
import Development from '../components/Content/Development/Development'
import GridTemp from '../components/Grid/GridTemp'
import HeaderTemp from '../components/Header/HeaderTemp'
import { api } from '../data/keywords'

const Server = () => {
  const Seo = {
    title: 'Слововир API',
    description: 'Відкрите безкоштовне API українських слів для розробників',
    openGraph: {
      title: 'Слововир API',
      description: 'Відкрите безкоштовне API українських слів для розробників',
    },
  }
  return (
    <>
    <NextSeo {...Seo} additionalMetaTags={[{name: 'keywords', content: api}]}/>
    <GridTemp state=''>
      <HeaderTemp type='alternative'/>
      <Development/>
    </GridTemp>
    </>
  )
}

export default Server