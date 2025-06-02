import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FilterButton } from '../components/Ui/FilterButton';

describe('FilterButton', () => {
  it('should render child content', () => {
    render(<FilterButton isClicked={false}>Todos</FilterButton>);
    expect(screen.getByText('Todos')).toBeInTheDocument();
  });

  it('You must apply styles for the NOT pressed state.', () => {
    render(<FilterButton isClicked={false}>Not clicked</FilterButton>);
    const button = screen.getByText('Not clicked');
    expect(button.className).toContain('bg-blue-950');
    expect(button.className).not.toContain('bg-white');
  });

  it('You must apply styles for the pressed state.', () => {
    render(<FilterButton isClicked={true}>Clicked</FilterButton>);
    const button = screen.getByText('Clicked');
    expect(button.className).toContain('bg-white');
    expect(button.className).not.toContain('bg-blue-950');
  });

  it('should execute the action when clicked', () => {
    const mockAction = vi.fn();
    render(
      <FilterButton isClicked={false} action={mockAction}>
        Click
      </FilterButton>
    );
    fireEvent.click(screen.getByText('Click'));
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
