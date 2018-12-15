import { createHttpLink } from 'apollo-link-http';
import { ApolloClient }   from 'apollo-client';
import { InMemoryCache }  from 'apollo-cache-inmemory';


const httpLink = createHttpLink({
  uri: 'http://core-graphql.dev.waldo.photos/pizza',
  fetchOptions: {
    mode: 'no-cors'
  }
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
