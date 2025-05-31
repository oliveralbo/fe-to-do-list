import { GetTasksDocument, RemoveTaskDocument, TaskFragment } from '../../gql/graphql';
import { useMutation, useQuery } from '@apollo/client/react/hooks';
import { Task } from './Task';
import { useState } from 'react';
import { ConfirmationModal } from '../Ui/ConfirmationModal';

export const TaskList = () => {
  const { data, loading, error, refetch } = useQuery(GetTasksDocument);
  const [removeTask] = useMutation(RemoveTaskDocument);
  const [taskToDelete, setTaskToDelete] = useState<TaskFragment | null>(null);

  const tasks = data?.tasks as TaskFragment[];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleDelete = async () => {
    try {
      await removeTask({ variables: { taskId: taskToDelete?.id || '' } });
    } catch (e) {
      console.log(e);
    }
    await refetch();
    setTaskToDelete(null);
  };

  const ordererTasks = [...tasks].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  return (
    <>
      <div className="w-full lg:w-[75%]">
        {ordererTasks &&
          ordererTasks.map((task: TaskFragment) => (
            <Task key={task.id} task={task} setTaskToDelete={setTaskToDelete} />
          ))}
      </div>
      <ConfirmationModal
        isOpen={!!taskToDelete}
        onClose={() => setTaskToDelete(null)}
        onConfirm={handleDelete}
        message={`¿Está seguro que desea eliminar la tarea "${taskToDelete?.title}"?`}
      />
    </>
  );
};
