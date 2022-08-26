import '../styles/style.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import {DefaultSeo} from 'next-seo'
import Seo from '../next-seo.config'
import { index } from '../data/keywords'

function MyApp({ Component, pageProps }: AppProps) {
  //style optimization, testing, toolbar problem fix
  return <>
  <DefaultSeo {...Seo} additionalMetaTags={[
    {name: 'keywords', content: index},
    {name:"google-site-verification", content:"1XI69fLsfqtPUBohrHIAHvqozgcovMJ3VKNh5XkV11Q"}
  ]}/>
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  </>
}

export default MyApp