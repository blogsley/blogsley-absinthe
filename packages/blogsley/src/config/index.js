var publicPath = import.meta.env.PUBLIC_PATH
if (!publicPath) {
  import.meta.env.PUBLIC_PATH = publicPath = '/'
}

var serverUrl = import.meta.env.VITE_SERVER_URL
if (!serverUrl) {
  import.meta.env.VITE_SERVER_URL = serverUrl = 'http://localhost:8000'
}

const url_object = new URL(serverUrl)
const url_protocol = url_object.protocol
const url_domain = url_object.hostname
const url_port = url_object.port

var graphqlUrl = import.meta.env.VITE_GRAPHQL_URL
if (!graphqlUrl) {
  import.meta.env.VITE_GRAPHQL_URL = graphqlUrl = `${url_protocol}//${url_domain}:${url_port}/graphql/`
}
var subscriptionslUrl = import.meta.env.VITE_SUBSCRIPTIONS_URL
if (!subscriptionslUrl) {
  import.meta.env.VITE_SUBSCRIPTIONS_URL = subscriptionslUrl = `ws://${url_domain}:${url_port}/graphql/`
}

const config = Object.assign({}, import.meta.env)
console.log(config)

export default config