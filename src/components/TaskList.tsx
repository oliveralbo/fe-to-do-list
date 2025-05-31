import { GetTasksDocument, TaskFragment } from '../gql/graphql';
import { useQuery } from '@apollo/client/react/hooks';
import { Task } from './Task';

export const TaskList = () => {
  const { data, loading, error } = useQuery(GetTasksDocument);

  const tasks = data?.tasks as TaskFragment[];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full lg:w-[75%]">
      {tasks && tasks.map((task: TaskFragment) => <Task key={task.id} task={task} />)}
    </div>
  );
};
