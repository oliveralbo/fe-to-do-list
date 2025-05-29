import { useQuery } from '@apollo/client/react/hooks';
import { GetTasksDocument } from '../gql/graphql';

export const Home = () => {
  const { data, loading, error } = useQuery(GetTasksDocument);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Tasks</h1>
      {data?.tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
        </div>
      ))}
    </div>
  );
};
