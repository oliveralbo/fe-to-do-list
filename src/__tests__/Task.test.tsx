import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MockedProvider } from '@apollo/client/testing';
import { Task } from '../components/Task/Task';
import { TaskFragment } from '../gql/graphql';

describe('Task', () => {
  const fakeTask: TaskFragment = {
    id: '1',
    title: 'Tarea de prueba',
    description: 'Descripción de la tarea',
    completed: false,
    createdAt: new Date().toISOString(),
    __typename: 'Task',
  };

  const renderTask = (taskOverrides = {}) => {
    const setTaskToDelete = vi.fn();
    const task = { ...fakeTask, ...taskOverrides };
    render(
      <MockedProvider>
        <Task task={task} setTaskToDelete={setTaskToDelete} />
      </MockedProvider>
    );
    return { setTaskToDelete };
  };

  it('should render title, description, and status', () => {
    renderTask();
    expect(screen.getByText('Tarea de prueba')).toBeInTheDocument();
    expect(screen.getByText('Descripción de la tarea')).toBeInTheDocument();
    expect(screen.getByText(/Pendiente ⏰/)).toBeInTheDocument();
  });

  it('should display pending styles when task.completed is false', () => {
    renderTask({ completed: false });
    const container = screen.getByTestId('task-container');
    expect(container?.className).toContain('bg-blue-300');
    expect(container?.className).toContain('border-blue-800');
    expect(screen.getByText(/Pendiente ⏰/)).toBeInTheDocument();
  });

  it('should display complete styles when task.completed is true', () => {
    renderTask({ completed: true });
    const container = screen.getByTestId('task-container');
    expect(container?.className).toContain('bg-green-300');
    expect(container?.className).toContain('border-green-800');
    expect(screen.getByText(/Completado ✅/)).toBeInTheDocument();
  });

  it('should allow switching to edit mode when clicking on “Edit”', () => {
    renderTask();
    const editarBtn = screen.getByText('Editar');
    fireEvent.click(editarBtn);
    expect(screen.getByRole('form', { name: /task-form/i })).toBeInTheDocument();
  });

  it('You should call setTaskToDelete when clicking on ✖️.', () => {
    const { setTaskToDelete } = renderTask();
    const deleteIcon = screen.getByText('✖️');
    fireEvent.click(deleteIcon);
    expect(setTaskToDelete).toHaveBeenCalledWith(expect.objectContaining({ id: '1' }));
  });
});
