import { useQuery } from '@apollo/client/react/hooks';
import { GetTasksDocument, TaskFragment } from '../gql/graphql';
import { TaskList } from './TaskList';

export const Home = () => {
  const { data, loading, error } = useQuery(GetTasksDocument);
  const tasks = data?.tasks as TaskFragment[];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-[100%] flex flex-col items-center">
      <h1 className="text-3xl mb-6">Lista de Tareas</h1>
      {/* <div className="border w-[100%] my-4">MenuBar</div> */}
      <TaskList tasks={tasks} />
    </div>
  );
};
