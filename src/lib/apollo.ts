import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql', // process.env.VITE_API_URL if is uploaded to vercel,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
