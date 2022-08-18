import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import Development from '../components/Content/Development/Development'
import Grid from '../components/Grid/Grid'
import HeaderAlternative from '../components/Header/HeaderAlternative'
import HeaderGame from '../components/Header/HeaderGame'
import { store } from '../store'

export async function getServerSideProps(context:GetServerSidePropsContext) {
  const paths = ['легінь','блаблабла', 'огірок/1', 'огірок/100']
  let data: any[] = []
  let links: string[] = []
  for (let i = 0; i < 4; i++) {    
    data[i] = await fetch(process.env.API_KEY+paths[i]).then(d=>d.json())
    links[i] = `${process.env.API_KEY+paths[i]}`
  }
  return {
    props: {
      data: await data,
      links: links
    },
  }
}
const Server:FC<{data: any[], links: string[]}> = ({data, links}) => {
  console.log(data)
  return (
    <Provider store={store}>
    <Grid>
      <HeaderAlternative/>
      <Development data={data} links={links}/>
    </Grid>
    </Provider>
  )
}

export default Server