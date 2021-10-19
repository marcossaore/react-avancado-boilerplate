import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>React avançado - Boilerplate</title>
        <link rel="short-icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple ptoject to work with Typescript, React, NextJS and Styled Components"
        ></meta>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
