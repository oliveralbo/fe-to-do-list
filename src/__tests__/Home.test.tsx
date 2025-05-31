import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Home } from '../components/Pages/Home';

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(
      <MockedProvider>
        <Home />
      </MockedProvider>
    );
    // Basic test to ensure component renders
    expect(document.body).toBeTruthy();
  });
});
