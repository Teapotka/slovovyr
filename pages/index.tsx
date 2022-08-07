import type { NextPage } from 'next'
import Landing from '../components/Content/Landing/Landing'
import Grid from '../components/Grid/Grid'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
   <>
   <Grid>
      <Header/>
      <Landing/>
    </Grid>
   </>
  )
}

export default Home