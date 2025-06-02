import { useMutation } from '@apollo/client';
import { TaskForm } from './TaskForm';
import { CompleteTaskDocument, EditTaskDocument, TaskFragment } from '../../gql/graphql';
import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '../Ui/Button';

interface TaskProps {
  task: TaskFragment;
  setTaskToDelete: Dispatch<SetStateAction<TaskFragment | null>>;
}

export const Task = ({ task, setTaskToDelete }: TaskProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [completeTask] = useMutation(CompleteTaskDocument);
  const [editTask] = useMutation(EditTaskDocument);

  const completedStyle = 'border-green-800 bg-green-300';
  const pendingStyle = 'border-blue-800 bg-blue-300';

  const handleEditSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    editTask({ variables: { taskId: task.id, title, description } });
    setIsEditing(false);
  };

  const handleComplete = () => {
    completeTask({ variables: { taskId: task.id, status: !task.completed } });
  };

  const date = new Date(task.createdAt);
  return (
    <div
      data-testid="task-container"
      className={`p-4 mb-4 border-3 shadow-xl rounded-2xl ${task.completed ? completedStyle : pendingStyle}`}
    >
      {!isEditing && (
        <>
          <div className="flex flex-row justify-between items-start mb-4 gap-2">
            <div>
              <h3 className="text-xl uppercase font-semibold">{task.title}</h3>
              <p className="text-sm sm:text-base">
                Estado: {task.completed ? 'Completado ✅' : 'Pendiente ⏰'}
              </p>
            </div>
            <div>
              <span className="text-sm mr-4">{`${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
              <span className="text-sm hover:cursor-pointer" onClick={() => setTaskToDelete(task)}>
                ✖️
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-4">
            <div className="flex-1">
              <p className="text-gray-700">{task.description}</p>
            </div>

            <div className="flex flex-col gap-2 lg:w-32">
              <Button action={() => setIsEditing(true)}>Editar</Button>
              <Button action={handleComplete}> {!task.completed ? 'Completar' : 'Rehacer'}</Button>
            </div>
          </div>
        </>
      )}
      {isEditing && (
        <TaskForm task={task} onCancel={() => setIsEditing(false)} onSubmit={handleEditSubmit} />
      )}
    </div>
  );
};
