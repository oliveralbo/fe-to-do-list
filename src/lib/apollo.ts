import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_BACKEND_URL}/graphql/`,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
