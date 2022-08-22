import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import Development from '../components/Content/Development/Development'
import Grid from '../components/Grid/Grid'
import GridTemp from '../components/Grid/GridTemp'
import HeaderAlternative from '../components/Header/HeaderAlternative'
import HeaderGame from '../components/Header/HeaderGame'
import HeaderTemp from '../components/Header/HeaderTemp'
import { store } from '../store'

// export async function getServerSideProps(context:GetServerSidePropsContext) {
//   const paths = ['легінь','блаблабла', 'огірок/1', 'огірок/100']
//   let data: any[] = []
//   let links: string[] = []
//   for (let i = 0; i < 4; i++) {    
//     data[i] = await fetch(process.env.API_KEY+paths[i]).then(d=>d.json())
//     links[i] = `${process.env.API_KEY+paths[i]}`
//   }
//   return {
//     props: {
//       data: await data,
//       links: links
//     },
//   }
// }
const Server = () => {
  return (
    // <Provider store={store}>
    <GridTemp>
      <HeaderTemp type='alternative'/>
      <Development/>
    </GridTemp>
    // </Provider>
  )
}

export default Server