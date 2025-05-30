import { useMutation } from '@apollo/client';
import { TaskFragment, CompleteTaskDocument } from '../gql/graphql';
import { useState } from 'react';

interface TaskProps {
  task: TaskFragment;
}

export const Task = ({ task }: TaskProps) => {
  const [completeTask] = useMutation(CompleteTaskDocument);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const completedStyle = 'border-green-800 bg-green-300';
  const uncompletedStyle = 'border-blue-800 bg-blue-300';

  const handleEdit = () => {
    alert('edit !');
  };
  const handleComplete = () => {
    completeTask({ variables: { taskId: task.id, status: !task.completed } });
  };

  return (
    <div
      className={`p-2 mb-4 border-3 shadow-xl rounded-2xl ${task.completed ? completedStyle : uncompletedStyle}`}
      key={task.id}
    >
      <div className="flex justify-between">
        <h3 className="text-xl uppercase">{task.title}</h3>
        <p>Status: {task.completed ? 'Completed ✅' : 'Pending ⏰'}</p>
      </div>
      <div className="grid grid-cols-5 items-center gap-2">
        <p className="col-span-4">{task.description}</p>
        <div className="w-full">
          {!isEditing && (
            <>
              <button
                className="w-full mb-2 border rounded-xl border-black bg-stone-300 col-span-1 justify-self-end hover:bg-stone-500 cursor-pointer"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
              <button
                className="w-full border rounded-xl border-black bg-stone-300 col-span-1 justify-self-end hover:bg-stone-500 cursor-pointer"
                onClick={handleComplete}
              >
                {!task.completed ? 'Completar' : 'Rehacer'}
              </button>
            </>
          )}
          {isEditing && (
            <>
              <button
                className="w-full mb-2 border rounded-xl border-black bg-stone-300 col-span-1 justify-self-end hover:bg-stone-500 cursor-pointer"
                onClick={handleEdit}
              >
                Aceptar cambios
              </button>
              <button
                className="w-full border rounded-xl border-black bg-stone-300 col-span-1 justify-self-end hover:bg-stone-500 cursor-pointer"
                onClick={() => setIsEditing(false)}
              >
                Cancelar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
