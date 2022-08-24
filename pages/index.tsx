import type { NextPage } from 'next'
import Landing from '../components/Content/Landing/Landing'
import GridTemp from '../components/Grid/GridTemp'
import HeaderTemp from '../components/Header/HeaderTemp'
import words, { time } from '../data/words'

const Home: NextPage = () => {
  console.log('WORD',  words
  .filter(w => w.region == 'center')
  [0].words[new Date().getDate() - 1], new Date().getDate() - 1, words
  .filter(w => w.region == 'center'), new Date().getTimezoneOffset(), time)
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