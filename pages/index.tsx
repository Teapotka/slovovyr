import type { NextPage } from 'next'
import Landing from '../components/Content/Landing/Landing'
import GridTemp from '../components/Grid/GridTemp'
import HeaderTemp from '../components/Header/HeaderTemp'

const Home: NextPage = () => {
  return (
   <>
   <GridTemp state='is-scrolless'>
      <HeaderTemp type='landing'/>
      <Landing/>
    </GridTemp>
   </>
  )
}

export default Home