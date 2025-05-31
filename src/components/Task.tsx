import { useMutation, useQuery } from '@apollo/client';
import { TaskForm } from './TaskForm';
import {
  CompleteTaskDocument,
  EditTaskDocument,
  GetTasksDocument,
  RemoveTaskDocument,
  TaskFragment,
} from '../gql/graphql';
import { useState } from 'react';
import { Button } from './Button';
import { ConfirmationModal } from './ConfirmationModal';

interface TaskProps {
  task: TaskFragment;
}

export const Task = ({ task }: TaskProps) => {
  const { refetch } = useQuery(GetTasksDocument);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [completeTask] = useMutation(CompleteTaskDocument);
  const [editTask] = useMutation(EditTaskDocument);
  const [removeTask] = useMutation(RemoveTaskDocument);

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

  const handleDelete = async () => {
    try {
      await removeTask({ variables: { taskId: task.id } });
    } catch (e) {
      console.log(e);
    }

    setShowModal(false);
    refetch();
  };

  return (
    <div
      className={`p-4 mb-4 border-3 shadow-xl rounded-2xl ${task.completed ? completedStyle : pendingStyle}`}
    >
      {!isEditing && (
        <>
          <div className="flex flex-row justify-between items-start mb-4 gap-2">
            <div className="">
              <h3 className="text-xl uppercase font-semibold">{task.title}</h3>
              <p className="text-sm sm:text-base">
                Estado: {task.completed ? 'Completado ✅' : 'Pendiente ⏰'}
              </p>
            </div>
            <p className="text-sm hover:cursor-pointer" onClick={() => setShowModal(true)}>
              ✖️
            </p>
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

      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        message={`¿Está seguro que desea eliminar la tarea "${task.title}"?`}
      />
    </div>
  );
};
