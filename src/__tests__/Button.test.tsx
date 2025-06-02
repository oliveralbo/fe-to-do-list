import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '../components/Ui/Button';

describe('Button', () => {
  it('Should render child content', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should execute the action when clicked', () => {
    const mockAction = vi.fn();
    render(<Button action={mockAction}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
