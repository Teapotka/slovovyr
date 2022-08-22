import '../styles/style.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    window.addEventListener("load",function() {
      setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
      }, 0);
    });
  })
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp