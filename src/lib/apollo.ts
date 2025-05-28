import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql', // process.env.VITE_API_URL if is uploaded to vercel,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
