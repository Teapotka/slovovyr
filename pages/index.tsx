import type { NextPage } from 'next'
import { Provider } from 'react-redux'
import Landing from '../components/Content/Landing/Landing'
import Grid from '../components/Grid/Grid'
import GridTemp from '../components/Grid/GridTemp'
import Header from '../components/Header/Header'
import HeaderTemp from '../components/Header/HeaderTemp'
import { store } from '../store'

const Home: NextPage = () => {
  return (
   <>
       <Provider store={store}>   
   <GridTemp>
      <HeaderTemp type='landing'/>
      <Landing/>
    </GridTemp>
       </Provider>
   </>
  )
}

export default Home