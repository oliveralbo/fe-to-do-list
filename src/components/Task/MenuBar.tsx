import { useContext, useState } from 'react';
import { Button } from '../Ui/Button';
import { FilterState, TaskContext } from '../../contexts/TaskContext';
import { useMutation, useQuery } from '@apollo/client';
import { CreateTaskDocument, GetTasksDocument } from '../../gql/graphql';
import { ConfirmationModal } from '../Ui/ConfirmationModal';
import { TaskForm } from './TaskForm';

export const MenuBar = () => {
  const { refetch } = useQuery(GetTasksDocument);
  const { setFilter } = useContext(TaskContext);
  const [createTask] = useMutation(CreateTaskDocument);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCreateTask = async (formData: FormData) => {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    await createTask({ variables: { title, description } });
    await refetch();
    setShowModal(false);
  };

  return (
    <div className="border w-full py-4 rounded-lg border-black bg-blue-900 flex justify-evenly mb-4">
      <div className="border flex justify-around">
        <label>search</label>
        <input type="text" />
      </div>
      <div className="border flex justify-around">
        <button onClick={() => setFilter(FilterState.ALL)}>Todos</button>
        <button onClick={() => setFilter(FilterState.COMPLETED)}>Completos</button>
        <button onClick={() => setFilter(FilterState.PENDING)}>Pendientes</button>
      </div>
      <div className="w-auto">
        <Button action={() => setShowModal(true)}>Nueva tarea</Button>
      </div>
      <ConfirmationModal
        isOpen={!!showModal}
        children={<TaskForm onCancel={() => setShowModal(false)} onSubmit={handleCreateTask} />}
      />
    </div>
  );
};
