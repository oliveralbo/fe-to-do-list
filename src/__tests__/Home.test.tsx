import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Home } from '../components/Home';
import { GetTasksDocument } from '../gql/graphql';

const mocks = [
  {
    request: {
      query: GetTasksDocument,
      variables: {},
    },
    result: {
      data: { tasks: [] }, // Devuelve una lista vacía
    },
  },
];

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>
    );
  });
});
