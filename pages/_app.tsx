import '../styles/style.sass'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "../redux/store";
import ModalContainer from "../components/Modal/ModalContainer";
import {useEffect} from "react";
import {loadThemes} from "../data/LocalStorage";
import {DefaultSeo} from "next-seo";
import Seo from '../next-seo.config'

function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {
        loadThemes()
    }, [])
    return (
        <>
            <DefaultSeo {...Seo} additionalMetaTags={[
                {name: 'google', content: "notranslate"},
                {name:"google-site-verification", content:"NQ0KmnOqaEZYlzTHHCv6jlOsIXAMBxPLN7XjlGCLNjQ"}
            ]}/>
        <Provider store={store}>
            <Component {...pageProps} />
            <ModalContainer/>
        </Provider>
        </>
    )
}

export default MyApp