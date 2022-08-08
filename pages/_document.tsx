import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <body className=''>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}