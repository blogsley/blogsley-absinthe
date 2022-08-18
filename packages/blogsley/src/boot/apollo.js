import typeDefs from '../graphql/typedefs'
import resolvers from '../graphql/resolvers'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { ApolloLink, split } from '@apollo/client/core'
import { getMainDefinition } from '@apollo/client/utilities'
import { onError } from "@apollo/client/link/error"
import { createApolloProvider } from '@vue/apollo-option'

// Uploads
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'
import { WebSocketLink } from '@apollo/client/link/ws'


import config from '../config'
import { store } from '../store'

const VITE_STANDALONE = import.meta.env.VITE_STANDALONE

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore'
  },
  query: {
    // fetchPolicy: 'network-only',
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all'
  },
  mutate: {
    // fetchPolicy: 'cache-and-network',
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
}

const cache = new InMemoryCache({
  // cacheRedirects: resolvers
})

cache.modify({
  data: {
    allPosts: [
      {
        __typename: 'Item',
        id: 'dqdBHJGgjgjg',
        text: 'test',
        done: true
      }
    ]
  }
})

export default async (app, options) => {
  let apolloClient = null
  if (VITE_STANDALONE) {
    apolloClient = createStandaloneClient()
  } else {
    apolloClient = createServerClient()
  }

  /*const apolloProvider = new VueApollo({
    defaultClient: client
  }*/
  const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
  })

  //app.use(VueApollo)
  app.use(apolloProvider)
  //TODO?
  app.apolloProvider = apolloProvider
  store.state.apolloProvider = apolloProvider
}

const createStandaloneClient = function () {
  const client = new ApolloClient({
    typeDefs,
    resolvers,
    cache
  })
  client.defaultOptions = defaultOptions
  return client
}

const createServerClient = function () {
  // const url_object = new URL(window.location.origin)
  console.log(config)
  const url_object = new URL(config.VITE_GRAPHQL_URL)
  const url_protocol = url_object.protocol
  const url_domain = url_object.hostname
  const url_port = url_object.port

  const graphqlUrl = `${url_protocol}//${url_domain}:${url_port}/graphql/`
  console.log(graphqlUrl)
  const subscriptionsUrl = `ws://${url_domain}:${url_port}/graphql/`

  /* const httpLink = createHttpLink({
    uri: graphqlUrl
  }) */
  const httpLink = createUploadLink({
    uri: graphqlUrl
  })

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('user-token')
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        // authorization: token ? `Bearer ${token}` : ''
        authorization: token
      }
    }
  })

  // Create the subscription websocket link
  const wsLink = new WebSocketLink({
    uri: subscriptionsUrl,
    options: {
      reconnect: true
    }
  })

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const splitLink = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
    },
    wsLink,
    httpLink
  )

  const link = ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      }
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    authLink.concat(splitLink)
  ])

  const client = new ApolloClient({
    resolvers,
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true
  })

  client.defaultOptions = defaultOptions
  return client
}
