import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Layout/Header';

describe('Header', () => {
  it('should display the logo with alt “TICMAS”', () => {
    render(<Header />);
    const logo = screen.getByAltText('TICMAS');
    expect(logo).toBeInTheDocument();
    expect(logo.getAttribute('src')).toContain('Logo_master_invertido.png');
  });

  it('should show title "TO-DO-LIST"', () => {
    render(<Header />);
    expect(screen.getByText('TO-DO-LIST')).toBeInTheDocument();
  });
});
