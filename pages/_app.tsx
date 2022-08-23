import '../styles/style.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  //style optimization, testing, toolbar problem fix
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp