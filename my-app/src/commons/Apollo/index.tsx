import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client';

interface IApolloSettingProps {
  children: JSX.Element|JSX.Element[];
}

export default function ApolloSetting(props:IApolloSettingProps) {

  const uploadLink = createUploadLink({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
  })
  
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>

  )
}