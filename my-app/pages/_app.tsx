import { AppProps } from 'next/app'
// import '../styles/globals.css'
import ApolloSetting from '../src/commons/Apollo'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ApolloSetting>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ApolloSetting>
  )
}
