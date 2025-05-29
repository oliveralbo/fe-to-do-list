import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Home } from '../components/Home';

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(
      <MockedProvider>
        <Home />
      </MockedProvider>
    );
  });
});
