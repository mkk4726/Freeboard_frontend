// import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles'
import Layout from '../src/commons/layout'
import ApolloSetting from '../src/commons/Apollo'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <ApolloSetting>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloSetting>
  )
}
