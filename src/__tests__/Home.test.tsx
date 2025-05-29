import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Home } from '../components/Home';
import { GetTasksDocument } from '../gql/graphql';

const mocks = [
  {
    request: {
      query: GetTasksDocument,
    },
    result: {
      data: {
        tasks: [
          {
            id: '1',
            title: 'Test Task',
            description: 'Test Description',
            completed: false,
          },
        ],
      },
    },
  },
];

describe('Home Component', () => {
  it('renders loading state initially', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders tasks when data is loaded', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    // Wait for the task to appear
    const taskTitle = await screen.findByText('Test Task');
    expect(taskTitle).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Status: Pending')).toBeInTheDocument();
  });
});
