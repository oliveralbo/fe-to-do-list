import { useMutation } from '@apollo/client';
import { TaskForm } from './TaskForm';
import { CompleteTaskDocument, EditTaskDocument, TaskFragment } from '../gql/graphql';
import { useState } from 'react';

interface TaskProps {
  task: TaskFragment;
}

export const Task = ({ task }: TaskProps) => {
  const [completeTask] = useMutation(CompleteTaskDocument);
  const [editTask] = useMutation(EditTaskDocument);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const completedStyle = 'border-green-800 bg-green-300';
  const uncompletedStyle = 'border-blue-800 bg-blue-300';

  const handleEditSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    editTask({ variables: { taskId: task.id, title, description } });
    setIsEditing(false);
  };

  const handleComplete = () => {
    completeTask({ variables: { taskId: task.id, status: !task.completed } });
  };

  return (
    <div
      className={`p-4 mb-4 border-3 shadow-xl rounded-2xl ${task.completed ? completedStyle : uncompletedStyle}`}
      key={task.id}
    >
      {!isEditing && (
        <>
          <div className="flex flex-row justify-between items-center mb-4 gap-2">
            <h3 className="text-xl uppercase font-semibold">{task.title}</h3>
            <p className="text-sm sm:text-base">
              Estado: {task.completed ? 'Completado ✅' : 'Pendiente ⏰'}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-4">
            <div className="flex-1">
              <p className="text-gray-700">{task.description}</p>
            </div>

            <div className="flex flex-col gap-2 lg:w-32">
              <button
                className="px-2 border rounded-xl border-black bg-stone-300 hover:bg-stone-500 cursor-pointer transition-colors lg:w-full"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
              <button
                className="px-2 border rounded-xl border-black bg-stone-300 hover:bg-stone-500 cursor-pointer transition-colors lg:w-full "
                onClick={handleComplete}
              >
                {!task.completed ? 'Completar' : 'Rehacer'}
              </button>
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
