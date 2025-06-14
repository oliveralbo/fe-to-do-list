import { TaskFragment } from '../../gql/graphql';
import { Button } from '../Ui/Button';

interface TaskFormProps {
  task?: TaskFragment;
  onCancel: () => void;
  onSubmit: (formData: FormData) => void;
}

export const TaskForm = ({ task, onCancel, onSubmit }: TaskFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full" aria-label="task-form">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
        <input
          name="title"
          defaultValue={task?.title}
          className="text-xl uppercase font-semibold bg-transparent border-b-2 border-gray-400 focus:border-gray-600 outline-none flex-1"
          placeholder="Título de la tarea"
          required
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end gap-4">
        <div className="flex-1">
          <textarea
            name="description"
            defaultValue={task?.description}
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-gray-500 outline-none resize-none"
            rows={3}
            placeholder="Descripción de la tarea"
            required
          />
        </div>

        <div className="flex flex-col gap-2 lg:w-32">
          <input
            value="Aceptar"
            type="submit"
            className="px-2 border rounded-xl border-black bg-stone-300 hover:bg-stone-500 cursor-pointer transition-colors lg:w-full"
          />
          <Button action={onCancel}>Cancelar</Button>
        </div>
      </div>
    </form>
  );
};
