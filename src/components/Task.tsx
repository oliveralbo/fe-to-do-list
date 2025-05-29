import { useMutation } from '@apollo/client';
import { TaskFragment, CompleteTaskDocument } from '../gql/graphql';

interface TaskProps {
  task: TaskFragment;
}

export const Task = ({ task }: TaskProps) => {
  const [completeTask] = useMutation(CompleteTaskDocument);

  const handleEdit = () => {
    alert('edit !');
  };
  const handleComplete = () => {
    completeTask({ variables: { taskId: task.id } });
  };
  console.log();
  return (
    <div
      className="p-2 mb-4 border-3 shadow-xl rounded-2xl border-blue-800 bg-blue-300"
      key={task.id}
    >
      <div className="flex justify-between">
        <h3 className="text-xl uppercase">{task.title}</h3>
        <p>Status: {task.completed ? 'Completed ✅' : 'Pending ⏰'}</p>
      </div>
      <div className="grid grid-cols-5 items-center gap-2">
        <p className="col-span-4">{task.description}</p>
        <div className="w-full">
          <button
            className="w-full mb-2 border rounded-xl border-black bg-stone-300 col-span-1 justify-self-end hover:bg-stone-500 cursor-pointer"
            onClick={handleEdit}
          >
            editar
          </button>
          <button
            className="w-full border rounded-xl border-black bg-stone-300 col-span-1 justify-self-end hover:bg-stone-500 cursor-pointer"
            onClick={handleComplete}
          >
            completar
          </button>
        </div>
      </div>
    </div>
  );
};
