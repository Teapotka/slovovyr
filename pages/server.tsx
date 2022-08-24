import React from 'react'
import Development from '../components/Content/Development/Development'
import GridTemp from '../components/Grid/GridTemp'
import HeaderTemp from '../components/Header/HeaderTemp'

const Server = () => {
  return (
    <GridTemp state=''>
      <HeaderTemp type='alternative'/>
      <Development/>
    </GridTemp>
  )
}

export default Server