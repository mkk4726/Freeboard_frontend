import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

interface IApolloSettingProps {
  children: JSX.Element|JSX.Element[];
}

export default function ApolloSetting(props:IApolloSettingProps) {

  const client = new ApolloClient({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>

  )
}