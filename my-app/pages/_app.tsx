import { AppProps } from 'next/app'
import '../styles/globals.css'
import ApolloSetting from '../src/commons/Apollo'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ApolloSetting>
      <Component {...pageProps} />
    </ApolloSetting>
  )
}
