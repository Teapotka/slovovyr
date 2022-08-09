import type { NextPage } from 'next'
import { Provider } from 'react-redux'
import Landing from '../components/Content/Landing/Landing'
import Grid from '../components/Grid/Grid'
import Header from '../components/Header/Header'
import { store } from '../store'

const Home: NextPage = () => {
  return (
   <>
       <Provider store={store}>   
   <Grid>
      <Header/>
      <Landing/>
    </Grid>
       </Provider>
   </>
  )
}

export default Home